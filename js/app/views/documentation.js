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
   
    initialize: function() {},

    render: function(container) {
      this.renderTemplate(DocumentationTemplate, {}, container);
      this.show();
    },
    
    show: function() {
      this.slideIn(App.stageWidth());
    },

    hide: function() {
      this.slideOut(App.stageWidth());
    }

  });
  
  return DocumentationScene;
});