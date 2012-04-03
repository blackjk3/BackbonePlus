/*
 * Backbone.Easing v0.1
 * Copyright 2012, Jason Kadrmas (@itooamaneatguy)
 * License: MIT
 */

(function (Backbone, _) {

	"use strict";

	Backbone.Easing = { Linear: {}, Quadratic: {}, Cubic: {}, Quartic: {}, Quintic: {}, Sinusoidal: {}, Exponential: {}, Circular: {}, Elastic: {}, Back: {}, Bounce: {} };


	Backbone.Easing.Linear.EaseNone = function ( k ) {

		return k;

	};

	//

	Backbone.Easing.Quadratic.EaseIn = function ( k ) {

		return k * k;

	};

	Backbone.Easing.Quadratic.EaseOut = function ( k ) {

		return - k * ( k - 2 );

	};

	Backbone.Easing.Quadratic.EaseInOut = function ( k ) {

		if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
		return - 0.5 * ( --k * ( k - 2 ) - 1 );

	};

	//

	Backbone.Easing.Cubic.EaseIn = function ( k ) {

		return k * k * k;

	};

	Backbone.Easing.Cubic.EaseOut = function ( k ) {

		return --k * k * k + 1;

	};

	Backbone.Easing.Cubic.EaseInOut = function ( k ) {

		if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
		return 0.5 * ( ( k -= 2 ) * k * k + 2 );

	};

	//

	Backbone.Easing.Quartic.EaseIn = function ( k ) {

		return k * k * k * k;

	};

	Backbone.Easing.Quartic.EaseOut = function ( k ) {

		return - ( --k * k * k * k - 1 );

	};

	Backbone.Easing.Quartic.EaseInOut = function ( k ) {

		if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
		return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );

	};

	//

	Backbone.Easing.Quintic.EaseIn = function ( k ) {

		return k * k * k * k * k;

	};

	Backbone.Easing.Quintic.EaseOut = function ( k ) {

		return ( k = k - 1 ) * k * k * k * k + 1;

	};

	Backbone.Easing.Quintic.EaseInOut = function ( k ) {

		if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
		return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );

	};

	Backbone.Easing.Sinusoidal.EaseIn = function ( k ) {

		return - Math.cos( k * Math.PI / 2 ) + 1;

	};

	Backbone.Easing.Sinusoidal.EaseOut = function ( k ) {

		return Math.sin( k * Math.PI / 2 );

	};

	Backbone.Easing.Sinusoidal.EaseInOut = function ( k ) {

		return - 0.5 * ( Math.cos( Math.PI * k ) - 1 );

	};

	//

	Backbone.Easing.Exponential.EaseIn = function ( k ) {

		return k === 0 ? 0 : Math.pow( 2, 10 * ( k - 1 ) );

	};

	Backbone.Easing.Exponential.EaseOut = function ( k ) {

		return k === 1 ? 1 : - Math.pow( 2, - 10 * k ) + 1;

	};

	Backbone.Easing.Exponential.EaseInOut = function ( k ) {

		if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 2, 10 * ( k - 1 ) );
			return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );

	};

	//

	Backbone.Easing.Circular.EaseIn = function ( k ) {

		return - ( Math.sqrt( 1 - k * k ) - 1);

	};

	Backbone.Easing.Circular.EaseOut = function ( k ) {

		return Math.sqrt( 1 - --k * k );

	};

	Backbone.Easing.Circular.EaseInOut = function ( k ) {

		if ( ( k /= 0.5 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
		return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);

	};

	//

	Backbone.Easing.Elastic.EaseIn = function( k ) {

		var s, a = 0.1, p = 0.4;
		if ( k == 0 ) return 0; if ( k == 1 ) return 1; if ( !p ) p = 0.3;
		if ( !a || a < 1 ) { a = 1; s = p / 4; }
		else s = p / ( 2 * Math.PI ) * Math.asin( 1 / a );
		return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );

	};

	Backbone.Easing.Elastic.EaseOut = function( k ) {

		var s, a = 0.1, p = 0.4;
		if ( k == 0 ) return 0; if ( k == 1 ) return 1; if ( !p ) p = 0.3;
		if ( !a || a < 1 ) { a = 1; s = p / 4; }
		else s = p / ( 2 * Math.PI ) * Math.asin( 1 / a );
		return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

	};

	Backbone.Easing.Elastic.EaseInOut = function( k ) {

		var s, a = 0.1, p = 0.4;
		if ( k == 0 ) return 0; if ( k == 1 ) return 1; if ( !p ) p = 0.3;
			if ( !a || a < 1 ) { a = 1; s = p / 4; }
			else s = p / ( 2 * Math.PI ) * Math.asin( 1 / a );
			if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
			return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;

	};

	//

	Backbone.Easing.Back.EaseIn = function( k ) {

		var s = 1.70158;
		return k * k * ( ( s + 1 ) * k - s );

	};

	Backbone.Easing.Back.EaseOut = function( k ) {

		var s = 1.70158;
		return ( k = k - 1 ) * k * ( ( s + 1 ) * k + s ) + 1;

	};

	Backbone.Easing.Back.EaseInOut = function( k ) {

		var s = 1.70158 * 1.525;
		if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
		return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );

	};

	Backbone.Easing.Bounce.EaseIn = function( k ) {

		return 1 - Backbone.Easing.Bounce.EaseOut( 1 - k );

	};

	Backbone.Easing.Bounce.EaseOut = function( k ) {

		if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {

			return 7.5625 * k * k;

		} else if ( k < ( 2 / 2.75 ) ) {

			return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;

		} else if ( k < ( 2.5 / 2.75 ) ) {

			return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;

		} else {

			return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;

		}

	};

	Backbone.Easing.Bounce.EaseInOut = function( k ) {

		if ( k < 0.5 ) return Backbone.Easing.Bounce.EaseIn( k * 2 ) * 0.5;
		return Backbone.Easing.Bounce.EaseOut( k * 2 - 1 ) * 0.5 + 0.5;

	};

})(this.Backbone, this._);
/* ======================================================
* Backbone.gfx v0.1
* Copyright 2012, Jason Kadrmas (@itooamaneatguy)
* Ported from zepto.gfx.js
* License: MIT
* ====================================================== */

(function (Backbone, _, $) {

	"use strict";

	var defaults = {
		duration: 400,
		easing: ''
	},

	vendors = {Webkit: 'webkit', Moz: '', O: 'o', ms: 'ms'},
	document = window.document, testEl = document.createElement('div'),
	prefix = '',
	vendor = '',

	transformTypes = [
		'scale', 'scaleX', 'scaleY', 'scale3d',
		'rotate', 'rotateX', 'rotateY', 'rotateZ', 'rotate3d',
		'translate', 'translateX', 'translateY', 'translateZ', 'translate3d',
		'skew', 'skewX', 'skewY',
		'matrix', 'matrix3d', 'perspective'
	];

	// Check vendor prefixes and assign Backbone.prefix
	$.each(vendors, function(_vendor, event){
		if (testEl.style[_vendor + 'TransitionProperty'] !== undefined) {
			vendor = _vendor;
			Backbone.prefix = prefix = '-' + _vendor.toLowerCase() + '-';
			return false;
		}
	});

	var vendorNames = {
		transition: prefix + 'transition',
		transform: prefix + 'transform',
		transitionEnd: vendor + 'TransitionEnd'
	};

	
	/*
		Add transform method to Zepto prototype
		@method : $.transform();
		@param properties : transforms object. Ex { rotate:'30deg', scale:0, translate: '30px, 50px'}
	*/
	
	$.fn.transform = function (properties) {
		var transforms = [];

		for (var key in properties) {
			if( _.indexOf(transformTypes, key) !== -1 ) {
				transforms.push(key + '(' + properties[key] + ')');
				delete properties[key];
			}
		}

		if (transforms.length) {
			properties[vendorNames.transform] = transforms.join(' ');
		}

		return $(this).css(properties);
	};

	/*
		Stop any css transition by adding transition end.
		@method : $.stop();
	*/

	$.fn.stop = function() {
		var props = {};
			props[prefix + 'transition'] = props[prefix + 'animation-name'] = 'none';
		
		$(this).css(props);
	};

	/*
		Slide In function
		@method : $.gfxSlideIn();
		@param properties : options object. Example values { duration:1000, direction:'right', distance:100, fade: false }
		@param callback : callback
	*/
  
	$.fn.gfxSlideIn = function (options, callback) {
		var $that = $(this),
			opts = $.extend({}, defaults, options || {}),
			distance,
			opacity,
			coords;
		
		// Default distance and direction if not added.
		opts.direction = opts.direction || 'right';
		distance = opts.distance || 100;
		
		// Flip direction if left
		if (opts.direction === 'left' || opts.direction === 'up') {
			distance *= -1;
		}

		distance += '%';

		// Fade as we slide?
		opacity = opts.fade ? 0 : 1;

		if(opts.direction === 'up' || opts.direction === 'down') {
			coords = '0,' + distance + ',0';
		} else {
			coords = distance + ',0,0';
		}

		$that.transform({translate3d: coords, opacity: opacity}).show();
		$that.animate({translate3d: '0,0,0', opacity: 1}, opts.duration, opts.easing, callback);
	};

	/*
		Slide Out function
		@method : $.gfxSlideOut();
		@param properties : options object. Example values { duration:1000, direction:'right', distance:100, fade: false }
		@param callback : callback
	*/

	$.fn.gfxSlideOut = function (options, callback) {

		var $that = $(this),
			opts = $.extend({}, defaults, options || {}),
			distance,
			opacity,
			coords = '0,0,0';
		
		// Default distance and direction if not added.
		opts.direction = opts.direction || 'right';
		distance = opts.distance || 100;
		
		// Flip direction if left
		if (opts.direction === 'left' || opts.direction === 'up') {
			distance *= -1;
		}

		distance += '%';
		
		// Fade as we slide?
		opacity = opts.fade ? 0 : 1;

		if(opts.direction === 'up' || opts.direction === 'down') {
			coords = '0,' + distance + ',0';
		} else {
			coords = distance + ',0,0';
		}
		
		$that.show().animate({ translate3d: coords, opacity: opacity}, opts.duration, opts.easing, function () {
			$that.transform({translate3d: '0,0,0', opacity: 1}).hide();
			if(callback) {
				callback.call();
			}
		});
	};

	/*
		Fade In function
		@method : $.gfxFadeIn();
		@param properties : options object. Example values { duration:1000, easing:'ease-out' }
		@param callback : callback
	*/

	$.fn.gfxFadeIn = function (options, callback) {
		var $that = $(this),
			opts = $.extend({}, defaults, options || {});
		
		opts.duration = opts.duration || 1000;
	
		$that.css({opacity: 0}).show().animate({opacity: 1}, opts.duration, opts.easing, callback);
	};

	/*
		Fade Out function
		@method : $.gfxFadeOut();
		@param properties : options object. Example values { duration:1000, easing:'ease-out' }
		@param callback : callback
	*/

	$.fn.gfxFadeOut = function (options, callback) {
		var $that = $(this),
			opts = $.extend({}, defaults, options || {});
	
		$that.css({opacity: 1}).animate({opacity: 0}, opts.duration, opts.easing, function () {

			// Reset the opacity to 1 and hide.
			$that.hide().css({opacity: 1});
		
			if(callback) {
				callback.call();
			}
		});
	};

})(this.Backbone, this._, Zepto);

/*
 * Backbone.CoreAnimation v0.1
 * Copyright 2012, Jason Kadrmas (@itooamaneatguy)
 * License: MIT
 */

(function (Backbone, _) {

	"use strict";

	var tick, tickID, FPS = 50, frame = 1, isAnimating = false,

		onFrame = window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				null;

	var CoreAnimation = function() {
		this.listeners = [];
	};

	_.extend(CoreAnimation.prototype, Backbone.Events, {
		
		events: {
			CORE_ANIMATION_STOP: "CoreAnimation:stop",
			CORE_ANIMATION_FRAME: "CoreAnimation:frame"
		},

		initialize: function() {

			var _self = this;

			_.bindAll(this);

			// Reset frame
			frame = 1;
			isAnimating = true;

			if (onFrame) {
				tick = function () {
					
					if(tick) {
						tickID = onFrame(tick);
						_self.step();
					}
				};

				tick();
			} else {
				tick = setInterval(this.step, 1000 / FPS);
			}

		},

		stop: function () {
			isAnimating = false;
			
			if (typeof tick === "number") clearInterval(tick);

			var onFrame = window.cancelRequestAnimationFrame ||
				window.webkitCancelRequestAnimationFrame ||
				window.mozCancelRequestAnimationFrame ||
				window.oCancelRequestAnimationFrame ||
				window.msCancelRequestAnimationFrame ||
				null;

			if (onFrame) onFrame(tickID);
			tick = null;

			// Remove all callbacks on this object
			this.off();

			// Tell everyone about it
			this.trigger(this.events.CORE_ANIMATION_STOP);
		},

		step: function () {
		
			// No one is listening, shut er down.
			if(!this.listeners.length) {
				this.stop();
				return;
			}

			console.log("CORE :: ANIM :: STEP");
			this.trigger(this.events.CORE_ANIMATION_FRAME, { frame: frame++ });
		},

		registerListener: function( key ) {

			console.log("CORE :: REGISTER LISTENER :: " + key);
			this.listeners.push(key);

			if( !isAnimating ) {
				this.initialize();
			}
		},

		removeListener: function( key ) {

			console.log("CORE :: REMOVE LISTENER :: " + key);

			var i = _.indexOf(this.listeners, key );
			this.listeners.splice( i, 1 );

			console.log("CORE :: LISTENERS :: " + this.listeners);
		}

	});

	Backbone.CoreAnimation = new CoreAnimation();
	
})(this.Backbone, this._);


(function (Backbone, _) {

	"use strict";

	var Core = Backbone.CoreAnimation;

	/* ======================================================
	* Backbone.Animation v0.1
	* Copyright 2012, Jason Kadrmas (@itooamaneatguy)
	* License: MIT
	* ====================================================== */

	Backbone.Animation = function() {
		this.tweens = [];
		this.map = [];
	};

	_.extend(Backbone.Animation.prototype, Backbone.Events, {

		tween: function(args) {
			return this.addTween(this, args);
		},

		delay: function(args) {
			return this.addTween(null, args);
		},

		timer: function() {
			
			var args = {
				autoStart: false,
				duration: -1
			};

			return this.addTween(null, args);
		},

		addTween: function(obj, args) {

			var tween = new Backbone.Tween(obj, args),
				_self = this;

			tween.on(tween.events.TWEEN_COMPLETE, function() {
				_self.removeTween(tween);
			});

			this.tweens.push(tween);

			return tween;
		},

		removeTween: function(tween) {
			
			tween.stop();

			var i = _.indexOf(this.tweens, tween);
			this.tweens.splice( i, 1 );
		},

		removeAllTweens: function() {

			for( var i = 0, len = this.tweens.length; i < len; i++ ) {
				this.tweens[i].stop();
			}

			this.tweens.length  = 0;
		}

	});

	/* ======================================================
	* Backbone.Tween v0.1
	* Copyright 2012, Jason Kadrmas (@itooamaneatguy)
	* License: MIT
	* ====================================================== */

	Backbone.Tween = function(obj, args) {
	
		// Element & ID
		this.tid = _.uniqueId('tween_');
		this.obj = obj;

		// Where are we going?
		this.to = args.to || {};

		// Set internal property values to keep track of progress
		this._currentValues = {};
		this._startValues = {};

		// Timing
		this.startTime = null;
		this.elapsed = 0;
		this.elapsedTime = 0;
		this.delay = args.delay || 0;
		this.delta = 0;
		this.duration = args.duration || 1000;
		this.easing = args.easing || Backbone.Easing.Linear.EaseNone;
		this.autoStart = args.autoStart;

		// Callbacks
		this.progress = args.progress || null;
		this.callback = args.complete || null;

		if(this.autoStart === true || this.autoStart === undefined) {
			this.start();
		}
	};

	_.extend(Backbone.Tween.prototype, Backbone.Events, {

		events: {
			TWEEN_COMPLETE: 'Backbone.Tween:complete'
		},

		listen: function() {
			
			this.listening = true;

			Core.registerListener( this.tid );
			Core.on(Core.events.CORE_ANIMATION_FRAME, this.step, this);
		},

		stopListening: function() {
			
			console.log("STOP LISTENER :: " + this.tid);

			this.listening = false;
			
			Core.off(Core.events.CORE_ANIMATION_FRAME, this.step, this);
			Core.removeListener( this.tid );
		},


		start: function() {
			var _to = this.to,
				_object = this.obj,
				property;

			this.startTime = Date.now() + this.delay;

			if(_object) {
				for ( property in _to ) {

					// Again, prevent dealing with null values
					if ( _object[ property ] === null ) {
						continue;
					}

					this._startValues[ property ] = _object[ property ];
					this._currentValues[ property ] = _to[ property ] - _object[ property ];

				}
			}

			this.listen();

			return this;
		},

		resume: function(elapsedTime) {

            this.elapsedTime = elapsedTime || this.elapsedTime;

			if(this.startTime !== null) {
				this.delta = this.elapsedTime;
				this.startTime = Date.now();
				this.listen();
			} else {
				this.start();
			}
			
			return this;
		},

		stop: function() {
			console.log("CORE :: STOP TWEEN");
			this.elapsedTime = Date.now() - this.startTime + this.delta;
			this.stopListening();

			return this;
		},

		getElapsedTime: function() {
			return this.elapsedTime;
		},

		step: function() {

			var current = Date.now(),
				delta = current - this.startTime + this.delta,
				value,
				_currentValues = this._currentValues,
				_startValues = this._startValues,
				property;

			if ( current < this.startTime ) {
				// Something is not right
				return false;
			}

			// Set elapsed time
			this.elapsedTime = delta;
			
			// Duration is infinite
			if(this.duration !== -1) {
				this.elapsed = delta / this.duration;

				// Elapsed can't be greater than 1.
				this.elapsed = this.elapsed > 1 ? 1 : this.elapsed;
				value = this.easing( this.elapsed );
			} else {
				value = delta;
			}

			// Actually update our values and redraw
			if(this.obj) {
				
				for ( property in _currentValues ) {
					this.obj[ property ] = _startValues[ property ] + _currentValues[ property ] * value;
				}

				this.obj.draw();
			}

			// Update progress
			if ( this.progress ) {
				this.progress.call( this.obj, value );
			}

			// We are done. Fire callbacks, etc.
			if ( this.elapsed == 1 ) {

				// Stop listening to our loop
				this.stopListening();

				// Do callback
				if ( this.callback ) {
					this.callback.call( this.obj );
					this.trigger(this.events.TWEEN_COMPLETE);
				}
			}
		}

	});

})(this.Backbone, this._);
/*
 * backbone.element.js v0.1
 * Copyright 2012, Jason Kadrmas (@itooamaneatguy)
 * License: MIT
 */

(function(Backbone, _, Modernizr) {

	"use strict";

	Backbone.Element = Backbone.View.extend ({
		className: 'element'
	});

	_.extend(Backbone.Element.prototype, new Backbone.Animation(), {

		x: 0,
		y: 0,
		scale: 1.0,
		alpha: 1.0,
		
		enabled: true,

		initialize: function() {},

		/*
		*	Sets a specific property. Then triggers a redraw.
		*	Example: element.set('w', 100);
		*
		*	@method : set
		*	@param : name : name of property
		*	@param : value : value to assign
		*/
		
		set: function(name, value, redraw) {
			
			var doDraw = redraw || true;

			this[name] = value;

			if(doDraw) {
				this.draw();
			}
			
			return this;
		},

		/*
		*	Sets many attributes at once and triggers a redraw.
		*	Example: element.attr({x:400, y:300, z:1, w:200, h:200, rotation:45, alpha:0.3}});
		*
		*	@method : attr
		*	@param : args : object with arguments to set
		*/

		attr: function(args, redraw) {

			var props = {},
				doDraw = redraw || true;

			for (var key in args) {
				if( this[key] !== args[key]) {
					props[key] = args[key];
				}
			}

			_.extend(this, props);

			if(doDraw) {
				this.draw();
			}

			return this;
		},

		/*
		*	Wrapper to assign css.
		*	Example: element.css({borderRadius: '1px'});
		*
		*	@method : css
		*	@param : args : object with style arguments to set
		*/

		css: function(args) {
			this.$el.css(args);
			return this;
		},

		/*
		*	Draws element based on size, position, rotation, and alpha
		*	@method : draw
		*/

		draw: function() {

			var style = {}, trans = [];

			// Add width
			if(this.w !== undefined) {
				
				if (typeof this.w === 'number') {
					// px width
					style.width = Math.floor(this.w) + 'px';
				} else if (typeof this.w === 'string') {
					// pct width
					style.width = this.w;
				}

			}

			// Add height
			if(this.h !== undefined) {
				if (typeof this.h === 'number') {
					// px height
					style.height = Math.floor(this.h) + 'px';
				} else if (typeof this.h === 'string') {
					// pct height
					style.height = this.h;
				}
			}

			// Add z-index
			if(this.z !== undefined) {
				style.zIndex = this.z;
			}

			// Add opacity
			if(this.alpha !== undefined) {
				style.opacity = this.alpha;
			}

			// Position and Rotation
			if (Modernizr.csstransforms3d) {
				trans.push('translate3d(' + (Math.floor(this.x)) + 'px,' + (Math.floor(this.y)) + 'px,0)');

				if(this.rotation !== undefined) {
					trans.push('rotateZ(' + this.rotation + 'deg)');
				}
			} else {
				style.left = Math.floor(this.x) + 'px';
				style.top = Math.floor(this.y) + 'px';

				if(this.rotation !== undefined) {
					trans.push('rotate(' + this.rotation + 'deg)');
				}
			}

			// Scale
			if(this.scale !== undefined) {
				trans.push('scale(' + this.scale + ')');
			}

			if(trans.length) {
				style.transform = trans.join(' ');
				style[Backbone.prefix + 'transform'] = trans.join(' ');
			}

			// Apply it all to our element
			this.css(style);
		}
	});

})(this.Backbone, this._, this.Modernizr);
/*
* backbone.scene.js v0.1
* Copyright 2012, Jason Kadrmas (@itooamaneatguy)
*/

(function(Backbone, _, $) {

	"use strict";

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
		*	Removes all elements from scene
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

})(this.Backbone, this._, Zepto);
/*
 * backbone.stage.js v0.1
 * Copyright 2012, Jason Kadrmas (@itooamaneatguy)
 * License: MIT
 */

(function(Backbone, _, $) {

	"use strict";
	
	// Internal Stage model
	var StageModel = Backbone.Model.extend({});

	Backbone.Stage = Backbone.Scene.extend({

		el: 'body',
		model: new StageModel(),
		router: null,

		EVENTS: {
			STAGE_RESIZE: 'stage/resize',
            STAGE_SCENE_CHANGE: 'stage/scene/change'
		},

		initialize: function(opts) {
			var _self = this;
			// Add the stage class to body
			this.$el.addClass('stage');

			// Optionally add footer
			if(opts === undefined || opts.footer !== false) {
				this.footer = new Backbone.Element({ tagName: 'footer' });
				this.$el.prepend( this.footer.$el );
			}

			// Add content
			this.content = new Backbone.Element({ tagName: 'article', className:'viewport' });
			this.$el.prepend( this.content.$el );

			// Optionally add header
			if(opts === undefined || opts.header !== false) {
				this.header = new Backbone.Element({ tagName: 'header' });
				this.$el.prepend( this.header.$el );
			}

			// Resize to initial window size.
			// Take into account weird issues where
			// window.innerWidth is not defined, Looking at you Android.
			this.resize(window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
						window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight));

			// Render right away since extending logic could add templates, etc.
			this.render();

			// Listen to resize and respond
			$(window).on('resize', function() {
				_self.resize(window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
							window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight));

				_self.trigger( _self.EVENTS.STAGE_RESIZE );
			});
		},

		// Currently a no-op. Should be overridden
		render: function() {},

		/*
			A method to resize the stage.
			@method : resize
			@param w : width to resize to
			@param h : height to resize to
		*/

		resize: function(w, h) {

			var orientation = 'portrait';

			if(w > h) {
				orientation = 'landscape';
			}

			this.model.set({
				width:Math.floor(w),
				height: Math.floor(h),
				halfWidth: Math.floor(w/2),
				halfHeight: Math.floor(h/2),
				orientation: orientation
			});
		},

		/*
			Keeps track of scene changes
			@method : change
			@param scene : new scene
			@param name : name of scene
		*/

		changeScene: function(scene, name) {

			// Remove the old scene, if it exists
			var currentScene = this.model.get('scene');

			if(currentScene) {
				currentScene.hide();
			}

			// Set new scene
			this.model.set({
				scene: scene,
				sceneName: name
			});

			scene.render( this.content.$el );

			this.trigger(this.EVENTS.STAGE_SCENE_CHANGE, scene, name);
		},

		/*
			Retrieves current scene from the model
			@method : currentScene
		*/

		currentScene: function() {
			return this.model.get('scene');
		},

		/*
			Retrieves current scene name from the model
			@method : currentSceneName
		*/

		currentSceneName: function() {
			return this.model.get('sceneName');
		},

		/*
			A method to calculate a percentage value based on the current width of the viewport.
			@method : calcWidth
			@param ratio : percentage of width
		*/

		calcWidth: function(ratio) {
			return Math.floor(this.model.get('width') * ratio);
		},
		
		/*
			A method to calculate a percentage value based on the current height of the viewport.
			@method : calcHeight
			@param ratio : percentage of height
		*/

		calcHeight: function(ratio) {
			return Math.floor(this.model.get('height') * ratio);
		},

		/*
			Method to get stageWidth from model.
			@method : stageWidth
		*/

		stageWidth: function() {
			return this.model.get('width');
		},

		/*
			Method to get stageHeight from model.
			@method : stageHeight
		*/
		
		stageHeight: function() {
			return this.model.get('height');
		},

		/*
			Method to get orientation of screen
			@method : stageOrientation
		*/
		
		stageOrientation: function() {
			return this.model.get('orientation');
		}

	});

}).call(this, this.Backbone, this._, Zepto);
(function (Backbone, _, $) {

	"use strict";

	var CoreAnimation = Backbone.CoreAnimation;

	var PhoneGap = function() {
		this.ready = false;
		this.onDevice = false;
	};

	_.extend(PhoneGap.prototype, Backbone.Events, {

		EVENTS: {
			PAUSE: 'pause',
			RESUME: 'resume'
		},

		initialize: function() {
			
			var doc = $(document);
			doc.on(this.EVENTS.PAUSE, this.pause);
			doc.on(this.EVENTS.RESUME, this.resume);
		},

		pause: function() {

			// Stop any timers or animation that is running
			// This will stop iOS from queuing these up.
			CoreAnimation.stop();
		},

		resume: function() {

			// Resume any timers or animation that is running
			CoreAnimation.initialize();
		},

		connection: function() {

			var networkState = navigator.network.connection.type;
			return networkState;
		},

		getCurrentPosition: function(success, error) {
			navigator.geolocation.getCurrentPosition(success, error);
		}
	});
	
	Backbone.PhoneGap = new PhoneGap();

})(this.Backbone, this._, Zepto);
