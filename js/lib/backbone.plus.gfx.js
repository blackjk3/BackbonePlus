/* ======================================================
* Backbone.gfx v0.1
* Copyright 2012, Jason Kadrmas (@itooamaneatguy)
* Ported from zepto.gfx.js
* License: MIT
* ====================================================== */

(function (Backbone, _, $) {

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

