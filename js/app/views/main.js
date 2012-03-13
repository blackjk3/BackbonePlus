/**
 * views/main.js
 * Author: Jason Kadrmas
 * Company: KadrmasConcepts LLC
 */

define(['text!templates/main.html'], function(MainTemplate){

  var MainScene = Backbone.Scene.extend({

    id: 'main',
    tagName: 'div',
    className: 'scene',
   
    initialize: function() {},

    render: function(container) {
      this.renderTemplate(MainTemplate, {}, container);
      this.show();
    },
    
    show: function() {
      this.slideIn(App.stageWidth());
    },

    hide: function() {
      this.slideOut(App.stageWidth());
    }

  });
  
  return MainScene;
});