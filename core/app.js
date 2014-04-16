/*global define*/
'use strict';

define([
	'backbone',
	'marionette',
], function (Backbone, Marionette) {
	var App = new Marionette.Application();

	App.addRegions({
		mainRegion: "#main"
	});

	App.addInitializer(function () {
		Backbone.history.start();
	});

	return App;
});