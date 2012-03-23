/*
 * main.js
 * Copyright 2012, Jason Kadrmas (@itooamaneatguy)
 * License: MIT
 */

var App = App || {};

require(['router'], function(AppRouter) {
	
	// App Ready
	$(document).ready(function() {
		App = new Backbone.Stage();
		App.router = new AppRouter();
	});
});