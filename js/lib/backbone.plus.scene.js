/*
* backbone.scene.js v0.1
* Copyright 2012, Jason Kadrmas (@itooamaneatguy)
*/

(function(Backbone, _) {

	Backbone.Scene = Backbone.Element.extend({
		className: 'scene'
	});

	_.extend(Backbone.Scene.prototype, {
		
		// Object to hold scene children
		children: null,

		// Toggle if scene is enabled
		enabled: true,

		// Can be overridden by extended class.
		initialize: function() {},

		// Can be overridden by extended class.
		show: function() {
			this.$el.show();
		},

		// Can be overridden by extended class.
		hide: function() {
			this.$el.hide();
			this.destroy();
		},

		/*
		*	Wrapper for gfxSlideIn
		*	@method : fadeIn
		*	@param callback
		*/

		fadeIn: function(callback) {
			this.$el.gfxFadeIn({duration:1000}, callback);
		},

		/*
		*	Wrapper for gfxFadeOut
		*	@method : fadeOut
		*	@param callback
		*/

		fadeOut: function(callback) {
			this.$el.gfxFadeOut({duration:1000}, _.bind(this.cleanup, this, callback));
		},
		

		/*
		*	Wrapper for gfxSlideIn
		*	@method : slideIn
		*	@param distance : distance to slide
		*	@param callback
		*/

		slideIn: function(distance, callback) {
			this.$el.gfxSlideIn({duration:1000, distance: distance}, callback);
		},


		/*
		*	Wrapper for gfxSlideOut
		*	@method : slideOut
		*	@param distance : distance to slide
		*	@param callback
		*/

		slideOut: function(distance, callback) {
			this.$el.gfxSlideOut({duration:1000, distance: distance}, _.bind(this.cleanup, this, callback));
		},
		
		cleanup: function(callback) {
			
			if(callback) {
				callback.call();
			}
			
			if(this.destroy) {
				this.destroy();
			}
		},

		/*
		*	Renders an underscore template assigns the $el to it, and appends it to a container.
		*	@method : renderTemplate
		*	@param : template : underscore template
		*	@param : data : the data to combine with the template
		*	@param : container : container to append generated template to
		*/

		renderTemplate: function(template, data, container) {
			this.$el.html( this.compileTemplate( template, data ) );
			container.append( this.$el );
		},

		/*
		*	Compiles an underscore template and returns the generated html.
		*	@method : compileTemplate
		*	@param : template : underscore template
		*	@param : data : the data to combine with the template
		*/

		compileTemplate: function(template, data) {
			var compiledTemplate = _.template( template, data );
			return compiledTemplate;
		},

		/*
		*	Fetches an underscore template async and executes a callback.
		*	@method : fetchTemplate
		*	@param : path : path to template file
		*	@param : callback : callback function to execute when loaded.
		*/

		fetchTemplate: function(path, callback) {
			var _self = this;
			$.get(path, function(contents) {
				callback.call(_self, contents);
			});
		},

		/*
		*	Adds an element to our scene object.
		*	@method : addElement
		*	@param : key : unique key for the added view
		*	@param : child : actual view to add
		*/

		addElement: function(key, child) {
			if(this.children === null) {
				this.children = {};
			}

			this.children[key] = child;
			return this.children[key];
		},

		/*
		*	Removes an element from our scene object.
		*	@method : removeElement
		*	@param : key : unique key for the view to remove
		*/
		
		removeElement: function(key) {
			this.children[key].remove();
			delete this.children[key];
		},

		/*
		*	Removes all views from scene
		*	@method : removeAll
		*/

		removeAll: function() {
			this.children = null;
		},

		/*
		*	Gets a view based on the key
		*	@method : get
		*	@param : key : unique key for the view to retrieve
		*/

		get: function(key) {
			return this.children[key];
		},

		/*
		*	Destroys a scene
		*	@method : destroy
		*/

		destroy: function() {

			console.log("DESTROY");

			// Remove from DOM
			this.remove();
			
			// Unbind all events
			this.off();

			// Removes all children
			this.removeAll();

			// Remove all tweens
			if(this.removeAllTweens) {
				this.removeAllTweens();
			}

			// Destroy model
			if(this.model) {
				this.model.destroy();
			}
		}
	});

})(this.Backbone, this._);