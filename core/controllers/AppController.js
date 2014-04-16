'use strict';

define([
	'app',
	'marionette',

	// Views
	'../../views/HomeView',

	// Models
	'../../models/Scoreboard'
], function (App, Marionette, HomeView, Scoreboard) {
	return Marionette.Controller.extend({

		index: function () {
			var model = new Scoreboard();

			$.when(model.fetch()).then(function () {

				App.mainRegion.show(new HomeView({
					collection: model
				}));

			});

		}

	});
});