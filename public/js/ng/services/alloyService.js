'use strict';

console.log("OUTSIDE: alloy Service");

//angular.module("main")
app.service('alloyService', function($http) {

    console.log("INSIDE: alloy Service");

    this.getVotes = function(callback) {
        $http({url: '/calexit', method: "GET"}).then(callback);
        // }).then(callback);
        // }).then(callback);
        // }).then(callback);

    };

    this.postVotes = function(params, callback) {
        $http({url: '/calexit', method: "POST", data: params}).then(callback);

    };

    this.delAllVotes = function(id, callback) {
        console.log("success from delHomeBrew");

        $http({url: '/del-all/', method: "GET"}).then(callback);

    };

    this.getHomeBrew = function(callback) {
        console.log("success from getHomeBrew");

        $http({url: '/homebrew', method: "GET"}).then(callback);

    };

    this.delHomeBrew = function(id, callback) {
        console.log("success from delHomeBrew");

        $http({
            url: '/homebrew/' + id,
            method: "DELETE"
        }).then(callback);

    };
    this.getSpecificHomeBrew = function(id, callback) {
        console.log("success from getSpecificHomeBrew");

        $http({
            url: '/homebrew/' + id,
            method: "GET"
        }).then(callback);

    };

    this.updateHomeBrew = function(id, callback) {
        console.log("success from getSpecificHomeBrew");
        $http({
            url: '/homebrew/' + id,
            method: "GET"
        }).then(callback);

    };

    this.putHomeBrew = function(id, contact, callback) {
        console.log("success from getSpecificHomeBrew");

        $http({
            url: '/homebrew/' + id,
            method: "PUT",
            data: contact
        }).then(callback);

    };

    this.getVoteCount = function(callback) {
        $http({url: '/get-count', method: "GET"}).then(callback);

    };

    this.getVoteSplitCount = function(callback) {
        $http({url: '/split-query', method: "POST"}).then(callback);

    };

    this.getVoteQuery = function(query, callback) {
        console.log("success from getHomeBrew");

        $http({url: '/omni-query', method: "POST", data: query}).then(callback);

    };

    this.handShake = function(callback) {
        $http({url: 'http://ipinfo.io', method: "get"}).then(callback);

    };

});
