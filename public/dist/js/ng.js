'use strict';

console.log("OUTSIDE: alloy Controller");
app.controller('alloyController', function($scope, $http, alloyService) {
  console.log("INSIDE: alloy Controller");

  $scope.borderPatrol = function() {
    alloyService.handShake(function(response) {
      if (response.data.ip !== undefined) {
        $scope.userIP = response.data.ip;
        $scope.authenticated = true;
        console.log("User Authenticated");
        console.log("____________________");
      } else {
        console.log("Auhentication Error");
        console.log("____________________");
      }
    });

  };

  $scope.borderPatrol();
  $scope.totalNO = 0;
  $scope.totalYES = 0;

  $scope.collectionPlate = function() {
    alloyService.getVoteCount(function(response) {
      // console.log("getHomebrew response.DATA: ");
      // console.info(response);
      $scope.totalAmountOfItemsInThisColletection = (response.data + 1);

    });
    $scope.getVoteSplit();
  }

  $scope.getVoteSplit = function() {
    alloyService.getVoteSplitCount(function(response) {
      $scope.totalYES = response.data.length;
      $scope.totalNO = $scope.totalAmountOfItemsInThisColletection - response.data.length;
    });
    $scope.refresh();
  }
  $scope.refresh = function() {

    $scope.ballotBox = [];

    alloyService.getVotes(function(response) {
      //  console.log(response);
      console.log("____________________");
      $scope.votes = response;

      // for (var x = 0; x <= $scope.statesArr.length; x++) {
      //
      //   if (x) {
      //   }
      //   console.log(x);
      // }

      var totral = 0;
      var totalYES = 0;
      $scope.voterMap = [];
      var arrayCounter = 0;

      Object.keys(response.data).forEach(function(index, key, error) {

        // console.log(key, response.data[key]);
        // console.log("INDEX: " + index);

        var tempLocation = response.data[key].location;

        // {
        //   state: tempLocation
        // };

        $scope.ballotBox.push({
          state: tempLocation
        });
        if ($scope.ballotBox[arrayCounter].state === tempLocation) {
          //  return error
        } else {
          arrayCounter++;
          $scope.ballotBox[arrayCounter].state = tempLocation;

        }

        // .totalVotes++;

        if (response.data[key].location === "California") {

          totral++;
          if (response.data[key].answer === "yes") {
            //    $scope.ballotBox.data['totalYesVotes'].totalYesVotes++;

            $scope.voterMap.push({
              index: index,
              location: tempLocation,
              answer: 'yes'
            });
            totalYES++;
            // console.log("TOTAL YES: " + totalYES);
            // console.log("TOTAL NO: " + (totral - totalYES));
            // console.log("TOTAL: " + (totral));

          } else {
            //  $scope.ballotBox.tempLocation.totalNoVotes++;

            $scope.voterMap.push({
              index: index,
              location: tempLocation,
              answer: 'no'
            });
          }
        }

      });

      var dd = $scope.ballotBox.map(function(line) {
        // var rTrn = {}
        console.log(line)
      })

      console.log($scope.ballotBox);
      console.log($scope.ballotBox.length);

    // console.log($scope.voterMap);
    // console.log($scope.voterMap.length);
    });

  }

  $scope.collectionPlate();

  $scope.deleteAll = function() {

    alloyService.delAllVotes(function(response) {

      console.log("_________________________________");
      console.log("getHomebrew response.DATA: ");
      console.info(response);
      console.log("_________________________________");
      $scope.calexit = response;

    });
    $scope.totalNO = 0;
    $scope.totalYES = 0;
    $scope.refresh();
  }

  // 000000000
  // 000000000
  // 000000000
  // 000000000
  // 000000000

  $scope.getVoteWithQuery = (xQuery) => {

    if (xQuery.length >= 1) {
      alloyService.getVoteQuery({

        q: xQuery
      }, function(response) {

        // SPOTIFYDATA IS USED IN THE VIEW TO PRESENT DATA
        $scope.movieData = response;

        console.log("_________________________________");
        console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVV");
        console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVV");
        console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVV");
        console.log(xQuery);
        console.info(response);
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("_________________________________");

      });
    }

  }

  // 000000000
  // 000000000
  // 000000000
  // 000000000
  // 000000000

  /*

  THIS IS WHERE I START TO MAKE THE MAGIC HAPPEN!

  */

  $scope.statesArr_proxy = [
    {
      "name": "Alabama",
      "abbreviation": "AL"
    }, {
      "name": "Alaska",
      "abbreviation": "AK"
    }, {
      "name": "Arizona",
      "abbreviation": "AZ"
    }, {
      "name": "Arkansas",
      "abbreviation": "AR"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "Colorado",
      "abbreviation": "CO"
    }, {
      "name": "Connecticut",
      "abbreviation": "CT"
    }, {
      "name": "Delaware",
      "abbreviation": "DE"
    }, {
      "name": "Florida",
      "abbreviation": "FL"
    }, {
      "name": "Georgia",
      "abbreviation": "GA"
    }, {
      "name": "Hawaii",
      "abbreviation": "HI"
    }, {
      "name": "Idaho",
      "abbreviation": "ID"
    }, {
      "name": "Illinois",
      "abbreviation": "IL"
    }, {
      "name": "Indiana",
      "abbreviation": "IN"
    }, {
      "name": "Iowa",
      "abbreviation": "IA"
    }, {
      "name": "Kansas",
      "abbreviation": "KS"
    }, {
      "name": "Kentucky",
      "abbreviation": "KY"
    }, {
      "name": "Louisiana",
      "abbreviation": "LA"
    }, {
      "name": "Maine",
      "abbreviation": "ME"
    }, {
      "name": "Maryland",
      "abbreviation": "MD"
    }, {
      "name": "Massachusetts",
      "abbreviation": "MA"
   }, {
      "name": "Michigan",
      "abbreviation": "MI"
    }, {
      "name": "Minnesota",
      "abbreviation": "MN"
    }, {
      "name": "Mississippi",
      "abbreviation": "MS"
    }, {
      "name": "Missouri",
      "abbreviation": "MO"
    }, {
      "name": "Montana",
      "abbreviation": "MT"
    }, {
      "name": "Nebraska",
      "abbreviation": "NE"
    }, {
      "name": "Nevada",
      "abbreviation": "NV"
    }, {
      "name": "New Hampshire",
      "abbreviation": "NH"
    }, {
      "name": "New Jersey",
      "abbreviation": "NJ"
    }, {
      "name": "New Mexico",
      "abbreviation": "NM"
    }, {
      "name": "New York",
      "abbreviation": "NY"
    }, {
      "name": "North Carolina",
      "abbreviation": "NC"
    }, {
      "name": "North Dakota",
      "abbreviation": "ND"
    }, {
      "name": "Ohio",
      "abbreviation": "OH"
    }, {
      "name": "Oklahoma",
      "abbreviation": "OK"
    }, {
      "name": "Oregon",
      "abbreviation": "OR"
    }, {
      "name": "Pennsylvania",
      "abbreviation": "PA"
    }, {
      "name": "Rhode Island",
      "abbreviation": "RI"
    }, {
      "name": "South Carolina",
      "abbreviation": "SC"
    }, {
      "name": "South Dakota",
      "abbreviation": "SD"
    }, {
      "name": "Tennessee",
      "abbreviation": "TN"
    }, {
      "name": "Texas",
      "abbreviation": "TX"
    }, {
      "name": "Utah",
      "abbreviation": "UT"
    }, {
      "name": "Vermont",
      "abbreviation": "VT"
    }, {
      "name": "Virginia",
      "abbreviation": "VA"
    }, {
      "name": "Washington",
      "abbreviation": "WA"
    }, {
      "name": "West Virginia",
      "abbreviation": "WV"
    }, {
      "name": "Wisconsin",
      "abbreviation": "WI"
    }, {
      "name": "Wyoming",
      "abbreviation": "WY"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }
  ];
  $scope.statesArr = [
    {
      "name": "Alabama",
      "abbreviation": "AL"
    }, {
      "name": "Alaska",
      "abbreviation": "AK"
    }, {
      "name": "Arizona",
      "abbreviation": "AZ"
    }, {
      "name": "Arkansas",
      "abbreviation": "AR"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "Colorado",
      "abbreviation": "CO"
    }, {
      "name": "Connecticut",
      "abbreviation": "CT"
    }, {
      "name": "Delaware",
      "abbreviation": "DE"
    }, {
      "name": "Florida",
      "abbreviation": "FL"
    }, {
      "name": "Georgia",
      "abbreviation": "GA"
    }, {
      "name": "Hawaii",
      "abbreviation": "HI"
    }, {
      "name": "Idaho",
      "abbreviation": "ID"
    }, {
      "name": "Illinois",
      "abbreviation": "IL"
    }, {
      "name": "Indiana",
      "abbreviation": "IN"
    }, {
      "name": "Iowa",
      "abbreviation": "IA"
    }, {
      "name": "Kansas",
      "abbreviation": "KS"
    }, {
      "name": "Kentucky",
      "abbreviation": "KY"
    }, {
      "name": "Louisiana",
      "abbreviation": "LA"
    }, {
      "name": "Maine",
      "abbreviation": "ME"
    }, {
      "name": "Maryland",
      "abbreviation": "MD"
    }, {
      "name": "Massachusetts",
      "abbreviation": "MA"
    }, {
      "name": "Michigan",
      "abbreviation": "MI"
    }, {
      "name": "Minnesota",
      "abbreviation": "MN"
    }, {
      "name": "Mississippi",
      "abbreviation": "MS"
    }, {
      "name": "Missouri",
      "abbreviation": "MO"
    }, {
      "name": "Montana",
      "abbreviation": "MT"
    }, {
      "name": "Nebraska",
      "abbreviation": "NE"
    }, {
      "name": "Nevada",
      "abbreviation": "NV"
    }, {
      "name": "New Hampshire",
      "abbreviation": "NH"
    }, {
      "name": "New Jersey",
      "abbreviation": "NJ"
    }, {
      "name": "New Mexico",
      "abbreviation": "NM"
    }, {
      "name": "New York",
      "abbreviation": "NY"
    }, {
      "name": "North Carolina",
      "abbreviation": "NC"
    }, {
      "name": "North Dakota",
      "abbreviation": "ND"
    }, {
      "name": "Ohio",
      "abbreviation": "OH"
    }, {
      "name": "Oklahoma",
      "abbreviation": "OK"
    }, {
      "name": "Oregon",
      "abbreviation": "OR"
    }, {
      "name": "Pennsylvania",
      "abbreviation": "PA"
    }, {
      "name": "Rhode Island",
      "abbreviation": "RI"
    }, {
      "name": "South Carolina",
      "abbreviation": "SC"
    }, {
      "name": "South Dakota",
      "abbreviation": "SD"
    }, {
      "name": "Tennessee",
      "abbreviation": "TN"
    }, {
      "name": "Texas",
      "abbreviation": "TX"
    }, {
      "name": "Utah",
      "abbreviation": "UT"
    }, {
      "name": "Vermont",
      "abbreviation": "VT"
    }, {
      "name": "Virginia",
      "abbreviation": "VA"
    }, {
      "name": "Washington",
      "abbreviation": "WA"
    }, {
      "name": "West Virginia",
      "abbreviation": "WV"
    }, {
      "name": "Wisconsin",
      "abbreviation": "WI"
    }, {
      "name": "Wyoming",
      "abbreviation": "WY"
    }
  ];

  setTimeout(function() {

    setInterval(function() {

      $scope.high = 13;
      $scope.lo = 0;
      $scope.randomNum = Math.floor((Math.random() * $scope.high) + $scope.lo);
      $scope.stateListHi = $scope.statesArr_proxy.length - 1;

      $scope.stateListAns = Math.floor((Math.random() * $scope.stateListHi) + $scope.lo);;

      $scope.userVOTE = {
        ip: $scope.userIP,
        answer: $scope.randomNum > 2
          ? "yes"
          : "no",
        location: $scope.statesArr_proxy[$scope.stateListAns].name
      }

      // if ($scope.totalAmountOfItemsInThisColletection <= 999999999) {
      //   $scope.customAdd($scope.userVOTE);
      // } else {
      //   $scope.deleteAll();
      //   $scope.customAdd($scope.userVOTE);
      // }

      // JACKPOT
      $scope.collectionPlate();
      // JACKPOT

    }, 5000);

  }, 100);

  $scope.customAdd = function(userVote) {

    alloyService.postVotes($scope.userVOTE, function(response) {
      $scope.collectionPlate();
    })

  }

  $scope.addVote = function(x) {

    $scope.userVOTE = {
      ip: $scope.userIP,
      answer: x,
      location: $scope.statesArr_proxy[75].name
    }

    if ($scope.authenticated) {

      alloyService.postVotes($scope.userVOTE, function(response) {
        $scope.collectionPlate();
      })

      // angular.element(document.querySelector('.ghost-botton'), function() {
      //   this.addClass('animated bounce');
      // })

    } else {
      alert("You cannot vote twice.")
    }
  }

  $scope.openNav = function() {
    document.getElementById("myNav").style.width = "100%";
  }

  $scope.closeNav = function() {
    document.getElementById("myNav").style.width = "0%";
  }
  $scope.fixedPosition = function() {
    alert("HELLLLO")
    document.getElementById("this").addClass('fixedPosition');
  }

});

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

'use strict';

console.log("OUTSIDE: alloy Directive");

angular.module("main").directive('inject', function() {

    console.log("INSIDE: alloy Directive");

    return {templateUrl: '../templates/inject.html', controller: 'alloyController', replace: false}

});
