/*global define*/
'use strict';

define(['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		defaults: {
			'home_team_name': '',
			'home_team_runs': '0',
			'away_team_name': '',
			'away_team_runs': '0',
			'outs': '0',
			'status': 'Final'
		}
	});
});