/*
 * backbone.element.js v0.1
 * Copyright 2012, Jason Kadrmas (@itooamaneatguy)
 * License: MIT
 */

(function(Backbone, _) {

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

})(this.Backbone, this._);