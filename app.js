var minesweeper = angular.module("minesweeper", ['ui.router']);

minesweeper.config(function($stateProvider) {
    $stateProvider.state('home', {
        url:"",
        templateUrl: "partials/home.html"

    });

    $stateProvider.state('game', {
        url:"/minesweeper",
        templateUrl: "partials/game.html",
        controller: "GameCtrl"
    });


});

minesweeper.directive('check', function() {
    return function (scope, element) {
        element.bind("click", function() {
            // element.addClass("opacity");
            $("span").removeClass("hidden");
        });
    };
});
