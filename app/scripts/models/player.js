/*global define*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';
    var PlayerModel = Backbone.Model.extend({
        url: 'https://api.parse.com/1/classes/playerClass/',
        initialize: function() {
            if(this.get('objectId')){
                this.url += this.get('objectId');
            }
        },
        defaults: {
        },
        validate: function(attrs, options) {
        },
        parse: function(response, options)  {
            return response;
        }
    });

    return PlayerModel;
});
