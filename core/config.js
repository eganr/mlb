/*global require*/
'use strict';

require.config({
	deps: ['init'],
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		marionette: {
			deps: ['backbone'],
			exports: 'Marionette'
		}
	},
	paths: {
		jquery: '../assets/libs/jquery-2.1.0',
		underscore: '../assets/libs/underscore',
		backbone: '../assets/libs/backbone',
		marionette: '../assets/libs/backbone.marionette',
		text: '../assets/libs/text'
	}
});