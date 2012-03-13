/**
 * views/main.js
 * Author: Jason Kadrmas
 * Company: KadrmasConcepts LLC
 */

define(['text!templates/documentation.html'], function(DocumentationTemplate){

  var DocumentationScene = Backbone.Scene.extend({

	id: 'documentation',
	tagName: 'div',
	className: 'scene',
   
	initialize: function() {
		_.bindAll(this);
	},

	render: function(container) {
		this.renderTemplate(DocumentationTemplate, {}, container);
		this.docs = this.$el.find('.docs');

		this.show();
	},
	
	show: function() {
		this.slideIn(App.stageWidth());
	},

	hide: function() {
		this.slideOut(App.stageWidth());
	},

	getSection: function(query) {
		this.fetchTemplate(this.getPath(query), function(content) {
			this.docs.html( this.compileTemplate(content, {}) );
		});
	},

	getPath: function(query) {
		return 'js/app/templates/documentation/' + query + '.html';
	}

  });
  
  return DocumentationScene;
});