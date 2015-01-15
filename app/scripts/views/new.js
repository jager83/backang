define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/new.html'
], function ($, _, Backbone, tmpl) {
    'use strict';
    var NewView = Backbone.View.extend({
        template: _.template(tmpl),
        el: '#alert-success',
        events: {},
        initialize: function (options) {
            this.options = options;
        },
        render: function () {
            var _this = this;
            $(this.el).append(this.template(this.options));
        }
    });

    return NewView;
});