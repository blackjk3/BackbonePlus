/**
 *
 * Author: Jason Kadrmas
 * Company: KadrmasConcepts LLC
 *
 */

 define(['views/main', 'views/documentation'], function(MainScene, DocumentationScene) {

	var AppRouter = Backbone.Router.extend({
	
		routes: {
			// Define some URL routes
			'/main': 'main',
			'/documentation/*': 'documentation',

			// Default/ Base route
			'*actions': 'base'
		},

		initialize: function() {
			Backbone.history.start();
		},

		main: function() {
			
			var scene = new MainScene();
			App.changeScene(scene, 'main');
		},

		documentation: function() {
			var scene = new DocumentationScene();
			App.changeScene(scene, 'documentation');
		},

		base: function() {
			// We have no matching route, lets just log what the URL was
			this.main();
		}

	});
  
  return AppRouter;

});