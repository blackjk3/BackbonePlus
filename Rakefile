require 'rake/packagetask'

BACKBONEPLUS_VERSION  = "0.1"

BACKBONEPLUS_ROOT     = File.expand_path(File.dirname(__FILE__))
BACKBONEPLUS_SRC_DIR  = File.join(BACKBONEPLUS_ROOT, 'js/lib')

BACKBONEPLUS_DIST_DIR = File.join(BACKBONEPLUS_ROOT, 'dist')
BACKBONEPLUS_PKG_DIR  = File.join(BACKBONEPLUS_ROOT, 'pkg')

BACKBONEPLUS_COMPONENTS = [
  'backbone.plus.easing',
  'backbone.plus.gfx',
  'backbone.plus.coreanimation',
  'backbone.plus.element',
  'backbone.plus.scene',
  'backbone.plus.stage',
  'backbone.plus.phonegap',
  # 'backbone.plus.sprite'
]

task :default => [:clean, :concat, :yuidist]

desc "Clean the distribution directory."
task :clean do
  rm_rf BACKBONEPLUS_DIST_DIR
  mkdir BACKBONEPLUS_DIST_DIR
end

def normalize_whitespace(filename)
  contents = File.readlines(filename)
  contents.each { |line| line.sub!(/\s+$/, "") }
  File.open(filename, "w") do |file|
    file.write contents.join("\n").sub(/(\n+)?\Z/m, "\n")
  end
end

desc "Strip trailing whitespace and ensure each file ends with a newline"
task :whitespace do
  Dir["*", "src/**/*", "test/**/*", "examples/**/*"].each do |filename|
    normalize_whitespace(filename) if File.file?(filename)
  end
end

desc "Concatenate source files to build backbone.plus.js"
task :concat, [:addons] => :whitespace do |task, args|
  # colon-separated arguments such as `concat[foo:bar:-baz]` specify
  # which components to add or exclude, depending on if it starts with "-"
  add, exclude = args[:addons].to_s.split(':').partition {|c| c !~ /^-/ }
  exclude.each {|c| c.sub!('-', '') }
  components = (BACKBONEPLUS_COMPONENTS | add) - exclude

  unless components == BACKBONEPLUS_COMPONENTS
    puts "Building backbone.plus.js by including: #{components.join(', ')}"
  end

  File.open(File.join(BACKBONEPLUS_DIST_DIR, 'backbone.plus.js'), 'w') do |f|
    f.puts components.map { |component|
      File.read File.join(BACKBONEPLUS_SRC_DIR, "#{component}.js")
    }
  end
end

def google_compiler(src, target)
  puts "Minifying #{src} with Google Closure Compiler..."
  `java -jar vendor/google-compiler/compiler.jar --js #{src} --summary_detail_level 3 --js_output_file #{target}`
end

def yui_compressor(src, target)
  puts "Minifying #{src} with YUI Compressor..."
  `java -jar vendor/yuicompressor/yuicompressor-2.4.5.jar #{src} -o #{target}`
end

def uglifyjs(src, target)
  begin
    require 'uglifier'
  rescue LoadError => e
    if verbose
      puts "\nYou'll need the 'uglifier' gem for minification. Just run:\n\n"
      puts "  $ gem install uglifier"
      puts "\nand you should be all set.\n\n"
      exit
    end
    return false
  end
  puts "Minifying #{src} with UglifyJS..."
  File.open(target, "w"){|f| f.puts Uglifier.new.compile(File.read(src))}
end

def process_minified(src, target)
  cp target, File.join(BACKBONEPLUS_DIST_DIR,'temp.js')
  msize = File.size(File.join(BACKBONEPLUS_DIST_DIR,'temp.js'))
  `gzip -9 #{File.join(BACKBONEPLUS_DIST_DIR,'temp.js')}`

  osize = File.size(src)
  dsize = File.size(File.join(BACKBONEPLUS_DIST_DIR,'temp.js.gz'))
  rm_rf File.join(BACKBONEPLUS_DIST_DIR,'temp.js.gz')

  puts "Original version: %.3fk" % (osize/1024.0)
  puts "Minified: %.3fk" % (msize/1024.0)
  puts "Minified and gzipped: %.3fk, compression factor %.3f" % [dsize/1024.0, osize/dsize.to_f]
end

desc "Generates a minified version for distribution, using UglifyJS."
task :dist do
  src, target = File.join(BACKBONEPLUS_DIST_DIR,'backbone.plus.js'), File.join(BACKBONEPLUS_DIST_DIR,'backbone.plus.min.js')
  uglifyjs src, target
  process_minified src, target
end

desc "Generates a minified version for distribution using the Google Closure compiler."
task :googledist do
  src, target = File.join(BACKBONEPLUS_DIST_DIR,'backbone.plus.js'), File.join(BACKBONEPLUS_DIST_DIR,'backbone.plus.min.js')
  google_compiler src, target
  process_minified src, target
end

desc "Generates a minified version for distribution using the YUI compressor."
task :yuidist do
  src, target = File.join(BACKBONEPLUS_DIST_DIR,'backbone.plus.js'), File.join(BACKBONEPLUS_DIST_DIR,'backbone.plus.min.js')
  yui_compressor src, target
  process_minified src, target
end

desc "Generate docco documentation from sources."
task :docs do
  puts "Generating docs..."
  puts "Note: to work, install node.js first, then install docco with 'sudo npm install docco -g'."
  puts `docco src/*`
end
