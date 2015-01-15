define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/detail.html',
    'models/player'
], function ($, _, Backbone, tmpl, PlayerModel) {
    'use strict';
    var DetailView = Backbone.View.extend({
        template: _.template(tmpl),
        el: '.content',
        events: {},
        initialize: function (options) {
            this.options = options;
            this.model = new PlayerModel({objectId:options.id});
        },
        render: function () {
            var _this = this;
            requirejs(['views/modules/header'], function (HeaderView) {        
                var header = new HeaderView({name:_this.options.name});
                header.render();
            });
            this.model.fetch({
                dataType: 'json',
                success: function(model,response){
                    _this.options['player'] = response;
                    $(_this.el).html(_this.template(_this.options));
                },
                headers:{
                    'X-Parse-Application-Id': '8Z4OJclFXIxCQvGmyEA2TPDSERkjq8l9WHBDWoxW',
                    'X-Parse-REST-API-Key': 'VvgaoFo9bImyJ8mHumZb8AcFpsqyMPmbNwWhS5NZ'
                }
            });
        }
    });

    return DetailView;
});