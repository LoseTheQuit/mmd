'use strict';

console.log("OUTSIDE: alloy Controller");
app.controller('alloyController', function($scope, $http, alloyService, lodash) {
    console.log("INSIDE: alloy Controller");

    $scope.ballotBoxFilter = [];
    $scope.ballotBox = [];

    $scope.borderPatrol = function() {
        $scope.totalNO = 0;
        $scope.totalYES = 0;
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
    $scope.cars = [
        { name: 'Nissan', guid: '1-9' },
        { name: 'Toyota', guid: '1-23' },
        { name: 'Ford', guid: '8-43' },
        { name: 'Honda', guid: '2-6' },
        { name: 'Datsun', guid: '1-55' }
    ];
    $scope.selectedCar = $scope.cars[1].g

    $scope.selectedState = function(x) {
        $scope.stateIndex = $scope.statesArr.indexOf(x);
    };

    $scope.borderPatrol();

    $scope.collectionPlate = function() {
        alloyService.getVoteCount(function(response) {
            $scope.totalAmountOfItemsInThisColletection = (response.data + 1);
        });
        $scope.refresh();
    }


    $scope.refresh = function() {

        $scope.ballotBoxFilter = [];

        alloyService.getVotes(function(response) {
            $scope.totalYES = 0;
            $scope.totalNO = 0;
            console.log("____________________");
            $scope.votes = response;
            _.forEach(response.data).filter((vote) => {
                $scope.ballotBoxFilter.push({
                    data: {
                        state: vote.location,
                        ip: vote.data.ip,
                        yes: vote.data.yes,
                        no: vote.data.no
                    }
                })

                if (vote.data.yes === 1) {
                    $scope.totalYES++;
                } else {
                    $scope.totalNO++;
                }

            })

            $scope.ballotBoxFilter = _.groupBy($scope.ballotBoxFilter, _.property('data.state'));

            // $scope.merged = [].concat.apply([], $scope.ballotBoxFilter);
            // console.log($scope.merged);

            // console.log($scope.ballotBoxFilter);


            var scopeVote_yes = 0;
            var scopeVote_no = 0;

            Object.keys($scope.ballotBoxFilter).forEach(function(key, index, error) {

                // console.log(key);
                // console.log($scope.ballotBoxFilter[key]);

                Object.keys($scope.ballotBoxFilter[key]).forEach(function(theyKEY, index, error) {

                    if (theyKEY == 0) {
                        scopeVote_yes = 0;
                        scopeVote_no = 0;
                    }

                    if ($scope.ballotBoxFilter[key][theyKEY].data.yes === 1) {
                        scopeVote_yes++;
                    } else {
                        scopeVote_no++
                    }

                });

                $scope.ballotBox.push({
                    data: {
                        state: key,
                        yes: scopeVote_yes,
                        no: scopeVote_no
                    }
                });

            });

            console.log($scope.ballotBox);



            // $scope.makeUniqArr = (theArr) => {

            //     return _.map(
            //         _.uniq(
            //             _.map(theArr, function(obj) {
            //                 return JSON.stringify(obj);
            //             })
            //         ),
            //         function(obj) {
            //             return JSON.parse(obj);
            //         }
            //     )
            // };

            // $scope.ballotBoxFilterCOOK = _.reduce($scope.ballotBoxFilterCOOK, function(sum, n, index) {
            //     console.log(n);
            //     Object.keys(n).forEach(function(key, index, error) {
            //         console.log("KEY: " + index);
            //     });
            //     // console.log(index);
            //     // console.log(n[0].data);
            //     // console.log(sum);
            //     // return sum + n;
            // }, 0);

            // console.log($scope.ballotBoxFilterCOOK);
            // console.log(JSON.stringify($scope.ballotBoxFilterV3, null, 1));

            // TELL HER TO CLEAN HER FACE
            // TELL HER TO CLEAN HER FACE
            // TELL HER TO CLEAN HER FACE

            // for (var x = 0; x <= response.data.length; x++) {
            //     var $scope.scopeTotalYes = 0;
            //     var $scope.scopeTotalNo = 0;

            //     if (x) {

            //         var dDouble = _.filter(response.data, _.iteratee(['location', response.data[x].location]))
            //             .filter((vote) => {
            //                 // console.log(response.data[x].location)
            //                 if (vote.answer == "yes") {
            //                     $scope.scopeTotalYes++;
            //                 } else {
            //                     $scope.scopeTotalNo++;
            //                 }
            //                 return vote
            //             })
            //             .map((line) => {

            //                 $scope.ballotBox.push({
            //                     state: line.location,
            //                     totalYes: $scope.scopeTotalYes,
            //                     totalNo: $scope.scopeTotalNo,
            //                 })
            //                 return {
            //                     state: line.location,
            //                     totalYes: $scope.scopeTotalYes,
            //                     totalNo: $scope.scopeTotalNo,
            //                 }
            //             })

            //         // console.log(dDouble.length)

            //         $scope.ballotBoxFilter.push($scope.makeUniqArr(dDouble));

            //     }
            //     // console.log($scope.makeUniqArr(dDouble));
            //     // console.log(x);
            // }

            // console.log("_________$scope.ballotBoxFilter_________")

            // debugger;
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

                //  $scope.calexit = response;

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

    $scope.statesArr_proxy = [{
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
    }];

    setTimeout(function() {

        setInterval(function() {

            $scope.high = 13;
            $scope.lo = 0;
            $scope.randomNum = Math.floor((Math.random() * $scope.high) + $scope.lo);
            $scope.randomNumV2 = Math.floor((Math.random() * ($scope.statesArr_proxy.length - 1)) + $scope.lo);

            if ($scope.randomNum > 2) {

                $scope.userVOTE = {

                    location: $scope.statesArr_proxy[$scope.randomNumV2].name,
                    data: {
                        ip: $scope.userIP,
                        yes: 1,
                        no: 0,
                    }
                }

            } else {

                $scope.userVOTE = {

                    location: $scope.statesArr_proxy[$scope.randomNumV2].name,
                    data: {
                        ip: $scope.userIP,
                        yes: 0,
                        no: 1,
                    }
                }
            }

            // if ($scope.totalAmountOfItemsInThisColletection <= 999999999) {
            //     $scope.customAdd($scope.userVOTE);
            //     console.log("DONE");

            // } else {
            //     $scope.deleteAll();
            //     $scope.customAdd($scope.userVOTE);
            // }

            // JACKPOT
            $scope.collectionPlate();
            // JACKPOT

        }, 10000);

    }, 300);

    $scope.customAdd = function(userVote) {
        alloyService.postQuestionOne($scope.userVOTE, function(response) {
            console.log("DONE");
            $scope.collectionPlate();
        })
    }

    $scope.addVote = function(x) {

        $scope.userVOTE = {
            ip: $scope.userIP,
            answer: x,
            location: $scope.statesArr_proxy[75].name
        }

        console.log($scope.question_1)
        if ($scope.authenticated) {

            alloyService.postVotes($scope.userVOTE, function(response) {
                $scope.collectionPlate();
            })

            angular.element(document.querySelector('.ghost-botton'), function() {
                this.addClass('animated bounce');
            })

        } else {
            alert("You cannot vote twice.")
        }
    }

    $scope.addVoteFromForm = function(x) {

        // check to make sure the form is completely valid
        console.log($scope.userVOTE)

        if ($scope.voteForm.$valid) {
            console.log('our form is amazing');
            if (x === 'yes') {
                $scope.userVOTE = {

                    location: $scope.question_1.state,
                    data: {
                        ip: $scope.userIP,
                        yes: 1,
                        no: 0,
                    }
                }
            } else {
                $scope.userVOTE = {

                    location: $scope.question_1.state,
                    data: {
                        ip: $scope.userIP,
                        yes: 0,
                        no: 1,
                    }
                }
            }

            if ($scope.authenticated) {


                alloyService.postQuestionOne($scope.userVOTE, function(response) {
                    $scope.collectionPlate();
                })

            } else {
                alert("You cannot vote twice.")
            }
        }

    };

    $scope.openNav = function() {
        document.getElementById("myNav").style.width = "100%";
    }

    $scope.closeNav = function() {
        document.getElementById("myNav").style.width = "0%";
    }


    $scope.statesArr = [{
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
    }];

    // DEPRECATED

    // $scope.getVoteSplit = function() {
    //     alloyService.getVoteSplitCount(function(response) {
    //     });
    //     $scope.refresh();
    // }

});