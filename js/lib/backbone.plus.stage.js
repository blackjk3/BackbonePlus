/*
 * backbone.stage.js v0.1
 * Copyright 2012, Jason Kadrmas (@itooamaneatguy)
 * License: MIT
 */

(function(Backbone, _) {

	
	// Internal Stage model
	var StageModel = Backbone.Model.extend({});

	Backbone.Stage = Backbone.Scene.extend({

		el: 'body',
		model: new StageModel(),
		router: null,

		EVENTS: {
			STAGE_RESIZE: 'stage/resize'
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

			this.trigger('stage/scene/change', scene, name);
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

}).call(this, this.Backbone, this._);