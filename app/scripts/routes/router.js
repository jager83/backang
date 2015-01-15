/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';
    var Router = Backbone.Router.extend({
        routes: {
            '': 'layout'    
        },
        layout: {
            console.log('hola');            
        }
    });

    return Router;
});
