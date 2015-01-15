//init
window.App = {
    Models:{},
    Collections:{},
    Views:{},
    redirectHashBang: function(baseUrl){
        window.location = baseUrl+window.location.hash.substring(2);
    }
};
 
// Configuration
requirejs.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        text: 'libs/text'
    }
});

// Let's kick off the application
requirejs([
    'underscore',
    'router',
    'vfactory'
], function(_, Router, Vfactory){
    Router.initialize({});  
});