'use strict';

console.log("OUTSIDE: alloy Directive");

angular.module("main").directive('verou', function() {

    console.log("INSIDE: alloy Directive");

    return {templateUrl: '../templates/inject.html', controller: 'alloyController', replace: false}

});
