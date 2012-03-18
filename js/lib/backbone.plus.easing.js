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