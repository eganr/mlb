/*global define*/
'use strict';

define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'text!../assets/templates/home.html',
	'text!../assets/templates/home-item.html',
], function ($, _, Backbone, Marionette, homeTemplate, homeItemTemplate) {

	var ItemView = Marionette.ItemView.extend({
		tagName: 'li',
		className: 'table-view-cell',
		template: _.template(homeItemTemplate),
		onRender: function () {
			console.log(this.model);
		}
	});

	return Marionette.CompositeView.extend({
		id: 'HomeView',
		template: _.template(homeTemplate),

		itemView: ItemView,
		itemViewContainer: '#GamesList',

		onRender: function () {

		}
	});
});