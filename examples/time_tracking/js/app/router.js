/**
 *
 * Author: Jason Kadrmas
 * Company: KadrmasConcepts LLC
 *
 */

 define(['views/index'], function(IndexScene) {

	var AppRouter = Backbone.Router.extend({

		routes: {
			// Define some URL routes
			'/index': 'index',

			// Default/ Base route
			'*actions': 'base'
		},

		initialize: function() {
			Backbone.history.start();
		},

		index: function() {

			var scene = new IndexScene();
			App.changeScene(scene, 'index');
		},

		base: function() {
			// We have no matching route, lets just log what the URL was
			this.index();
		}

	});

  return AppRouter;

});
