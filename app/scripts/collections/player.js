/*global define*/

define([
    'underscore',
    'backbone',
    'models/player'
], function (_, Backbone, PlayerModel) {
    'use strict';
    var Players = Backbone.Collection.extend({
        model: PlayerModel,
        url: 'https://api.parse.com/1/classes/playerClass/',
		parse: function(response){						
			return response;			
		}
    });

    return Players;
});