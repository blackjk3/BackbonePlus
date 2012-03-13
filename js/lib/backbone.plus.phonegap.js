(function (Backbone, _) {

	var CoreAnimation = Backbone.CoreAnimation;

	var PhoneGap = function() {
		this.ready = false;
	};

	_.extend(PhoneGap.prototype, Backbone.Events, {

		EVENTS: {
			PAUSE: 'pause',
			RESUME: 'resume'
		},

		initialize: function() {
			
			doc.on(this.EVENTS.PAUSE, this.pause);
			doc.on(this.EVENTS.RESUME, this.resume);
		},

		pause: function() {

			// Stop any timers or animation that is running
			// This will stop iOS from queuing these up.
			CoreAnimation.stop();
		},

		resume: function() {

			// Resume any timers or animation that is running
			CoreAnimation.initialize();
		},

		connection: function() {

			var networkState = navigator.network.connection.type;
			return networkState;
		},

		getCurrentPosition: function(success, error) {
			navigator.geolocation.getCurrentPosition(success, error);
		}
	});
	
	Backbone.PhoneGap = new PhoneGap();

})(this.Backbone, this._);