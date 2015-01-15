define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            'list':'home',
            'add':'add',
            'about':'about',
            'detail/:detailId':'detail',     
            '*actions':'home'
        }
    });

    var initialize = function(options){
        var router = new AppRouter(options);
        
        router.on('route:home', function () {
            requirejs(['views/list'], function (ListView) {        
                var listPage = new ListView({name:'list'});
                listPage.render();
            });
        });
        
        router.on('route:add', function () {
            requirejs(['views/add'], function (AddView) {        
                var addPage = new AddView({name:'add'});
                addPage.render();
            });
        });

        router.on('route:about', function () {
            requirejs(['views/about'], function (AboutView) {        
                var aboutPage = new AboutView({name:'about', appname:'backang'});
                aboutPage.render();
            });
        });

        router.on('route:detail', function (objectId) {
            requirejs(['views/detail'], function (DetailView) {        
                var detailPage = new DetailView({name:'detail',id:objectId});
                detailPage.render();
            });
        });

        Backbone.history.start();
    };
    
    return {
        initialize: initialize
    };
});
