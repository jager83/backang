/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/modules/header.html'
], function ($, _, Backbone, tmpl) {
    'use strict';
    var HeaderView = Backbone.View.extend({
        template: _.template(tmpl),
        el: '.header',
        events: {},
        initialize: function (options) {
            this.options = options;
        },
        render: function () {
            this.$el.html(this.template(this.options));
        }
    });

    return HeaderView;
});
