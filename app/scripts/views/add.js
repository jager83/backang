define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/add.html',
    'models/player'
], function ($, _, Backbone, tmpl, Player) {
    'use strict';
    var AddView = Backbone.View.extend({
        template: _.template(tmpl),
        el: '.content',
        events: {
            'submit #addPlayer': 'addPlayer'
        },
        initialize: function (options) {
            this.options = options;
            this.player = new Player();
        },
        render: function () {
            var _this = this;
            requirejs(['views/modules/header'], function (HeaderView) {        
                var header = new HeaderView({name:_this.options.name});
                header.render();
            });
            $(this.el).html(this.template(this.options));
        },
        addPlayer: function(ev) {
            ev.preventDefault();
            var _this = this;
            var player = {
                name: $('#name').val(),
                surname: $('#surname').val(),
                bio: $('#bio').val()
            };
            
            this.player.save(player,{
                success: function(model, response){
                    requirejs(['views/new'], function (NewPlayer) {        
                        var newPlayer = new NewPlayer({objectId:response.objectId});
                        newPlayer.render();
                    });
        			$("#alert-success").show("fast");
        			$("#alert-error").hide();
                    setTimeout(function(){
        				$("#alert-success").hide("slow");
        			}, 2000);
                },
                error: function(model, response){
        			$("#alert-error").show("fast");
        			$("#alert-success").hide();
        			setTimeout(function(){
        				$("#alert-error").hide("slow");
        			}, 2000);
                },
                headers: {
                    'X-Parse-Application-Id': '8Z4OJclFXIxCQvGmyEA2TPDSERkjq8l9WHBDWoxW',
                    'X-Parse-REST-API-Key': 'VvgaoFo9bImyJ8mHumZb8AcFpsqyMPmbNwWhS5NZ'
                }
            });
        }
    });

    return AddView;
});