/**
 * views/main.js
 * Author: Jason Kadrmas
 * Company: KadrmasConcepts LLC
 */

define(['text!templates/index.html'], function(MainTemplate){

  var MainScene = Backbone.Scene.extend({

    id: 'index',
    tagName: 'div',
    className: 'scene',

    stopwatch: null,

    initialize: function() {
      _.bindAll(this);
    },

    render: function(container) {
      this.renderTemplate(MainTemplate, {}, container);

      this.button = this.$el.find('.start');
      this.display = this.$el.find('.display');
      this.show();
    },

    show: function() {
      this.slideIn(App.stageWidth());

      // Stopwatch
      this.stopwatch = this.timer();
      this.stopwatch.progress = this.updateDisplay;

      this.button.on('click', this.toggleState);
    },

    toggleState: function(e) {

      e.preventDefault();

      console.log(this.stopwatch);

      if(this.stopwatch.listening) {
        this.stopwatch.stop();
      } else {
        this.stopwatch.resume();
      }
    },

    updateDisplay: function(value) {
      var seconds = Math.floor((value / 1000)%60),
          minutes = Math.floor((value/(1000*60))%60),
          hours = Math.floor((value/(1000*60*60))%24),
          str;

      if( seconds < 10 ) {
        seconds = '0' + seconds;
      }

      if( minutes < 10 ) {
        minutes = '0' + minutes;
      }

      if( hours < 10 ) {
        hours = '0' + hours;
      }

      str = hours + ':' + minutes + ':' + seconds;
      this.display.html(str);
    },

    hide: function() {
      this.slideOut(App.stageWidth());
    }

  });

  return MainScene;
});
