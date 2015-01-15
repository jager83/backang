define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/about.html'
], function ($, _, Backbone, tmpl) {
    'use strict';
    var AboutView = Backbone.View.extend({
        template: _.template(tmpl),
        el: '.content',
        events: {},
        initialize: function (options) {
            this.options = options;
        },
        render: function () {
            var _this = this;
            requirejs(['views/modules/header'], function (HeaderView) {        
                var header = new HeaderView({name:_this.options.name});
                header.render();
            });
            $(this.el).html(this.template(this.options));
        }
    });

    return AboutView;
});