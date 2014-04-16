/*global define*/
'use strict';

define([
	'underscore',
	'backbone',
	'./Game'
], function(_, Backbone, Game) {
	return Backbone.Collection.extend({

		url: 'http://gd2.mlb.com/components/game/mlb/',

		model: Game,

		initialize: function () {
			_.bindAll(this, 'parse');

			var dt = new Date();
			var month = dt.getMonth() + 1;
			var day = dt.getDate();
			var year = dt.getFullYear();

			this.url += 'year_' + year + '/month_' + this.formatAsTwoDigits(month) + '/day_' + this.formatAsTwoDigits(day) + '/miniscoreboard.json';
		},

		formatAsTwoDigits: function (i) {
			return i < 10 ? '0' + i : i;
		},

		parse: function (response) {
			var games = [];

			_.each(response.data.games.game, function (game) {
				games.push(new Game(game));
			});

			return games;
		}
	});
});