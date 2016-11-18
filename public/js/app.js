'use strict';console.log("OUTSIDE: main");var app=angular.module('main',['ngLodash']);console.log("INSIDE: main");'use strict';console.log("OUTSIDE: alloy Controller");app.controller('alloyController',function($scope,$http,alloyService,lodash){console.log("INSIDE: alloy Controller");$scope.ballotBox=[];$scope.borderPatrol=function(){$scope.totalNO=0;$scope.totalYES=0;alloyService.handShake(function(response){if(response.data.ip!==undefined){$scope.userIP=response.data.ip;$scope.authenticated=true;console.log("User Authenticated");console.log("____________________");}else{console.log("Auhentication Error");console.log("____________________");}});};$scope.cars=[{name:'Nissan',guid:'1-9'},{name:'Toyota',guid:'1-23'},{name:'Ford',guid:'8-43'},{name:'Honda',guid:'2-6'},{name:'Datsun',guid:'1-55'}];$scope.selectedCar=$scope.cars[1].g;$scope.selectedState=function(x){$scope.stateIndex=$scope.statesArr.indexOf(x);};$scope.borderPatrol();$scope.collectionPlate=function(){alloyService.getVoteCount(function(response){$scope.totalAmountOfItemsInThisColletection=response.data+1;});$scope.refresh();};$scope.writeballot=function(){alloyService.writeToDisk($scope.ballotBoxFINAL,function(response){// console.log(response)
});};$scope.refresh=function(){$scope.ballotBox=[];alloyService.getVotes(function(response){$scope.totalYES=0;$scope.totalNO=0;console.log("____________________");$scope.votes=response;_.forEach(response.data).filter(function(vote){$scope.ballotBox=[];$scope.ballotBox.push({data:{state:vote.location,ip:vote.data.ip,yes:vote.data.yes,no:vote.data.no}});if(vote.data.yes==1){$scope.totalYES++;}else{$scope.totalNO++;}});$scope.ballotBox=_.groupBy(response.data,_.property('location'));// $scope.merged = [].concat.apply([], $scope.ballotBox);
// console.log($scope.merged);
// console.log($scope.ballotBox);
$scope.ballotBoxFINAL=[];var scopeVote_yes=0;var scopeVote_no=0;Object.keys($scope.ballotBox).forEach(function(key,index,error){// console.log(key);
// console.log($scope.ballotBox[key]);
Object.keys($scope.ballotBox[key]).forEach(function(theyKEY,index,error){// console.log($scope.ballotBox[key][theyKEY].data.state);
if(theyKEY==0){scopeVote_yes=0;scopeVote_no=0;}if($scope.ballotBox[key][theyKEY].data.yes===1){scopeVote_yes++;}else{scopeVote_no++;}});$scope.ballotBoxFINAL.push({data:{state:key,yes:scopeVote_yes,no:scopeVote_no}});});// console.log($scope.ballotBox);
// console.log("***************** $scope.ballotBox ^^^");
// console.log($scope.ballotBoxFINAL);
// console.log("************ $scope.ballotBoxFINAL ^^^");
//    $scope.writeballot();
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
// $scope.ballotBoxCOOK = _.reduce($scope.ballotBoxCOOK, function(sum, n, index) {
//     console.log(n);
//     Object.keys(n).forEach(function(key, index, error) {
//         console.log("KEY: " + index);
//     });
//     // console.log(index);
//     // console.log(n[0].data);
//     // console.log(sum);
//     // return sum + n;
// }, 0);
// console.log($scope.ballotBoxCOOK);
// console.log(JSON.stringify($scope.ballotBoxV3, null, 1));
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
//                 $scope.ballotBoxFINAL.push({
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
//         $scope.ballotBox.push($scope.makeUniqArr(dDouble));
//     }
//     // console.log($scope.makeUniqArr(dDouble));
//     // console.log(x);
// }
// console.log("_________$scope.ballotBox_________")
// debugger;
});};$scope.collectionPlate();$scope.deleteAll=function(){alloyService.delAllVotes(function(response){console.log("_________________________________");console.log("getHomebrew response.DATA: ");console.info(response);console.log("_________________________________");$scope.calexit=response;});$scope.totalNO=0;$scope.totalYES=0;$scope.refresh();};// 000000000
// 000000000
// 000000000
// 000000000
// 000000000
$scope.getVoteWithQuery=function(xQuery){if(xQuery.length>=1){alloyService.getVoteQuery({q:xQuery},function(response){//  $scope.calexit = response;
console.log("_________________________________");console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVV");console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVV");console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVV");console.log(xQuery);console.info(response);console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");console.log("_________________________________");});}};// 000000000
// 000000000
// 000000000
// 000000000
// 000000000
/*

    THIS IS WHERE I START TO MAKE THE MAGIC HAPPEN!

    */$scope.statesArr_proxy=[{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"},{"name":"California","abbreviation":"CA"}];$scope.ignitionSwitch=false;// setTimeout(function() {
//     setInterval(function() {
//         $scope.high = 13;
//         $scope.lo = 0;
//         $scope.randomNum = Math.floor((Math.random() * $scope.high) + $scope.lo);
//         $scope.randomNumV2 = Math.floor((Math.random() * ($scope.statesArr_proxy.length - 1)) + $scope.lo);
//         if ($scope.randomNum > 2) {
//             $scope.userVOTE = {
//                 location: $scope.statesArr_proxy[$scope.randomNumV2].name,
//                 data: {
//                     ip: $scope.userIP,
//                     yes: 1,
//                     no: 0,
//                 }
//             }
//         } else {
//             $scope.userVOTE = {
//                 location: $scope.statesArr_proxy[$scope.randomNumV2].name,
//                 data: {
//                     ip: $scope.userIP,
//                     yes: 0,
//                     no: 1,
//                 }
//             }
//         }
//         if ($scope.ignitionSwitch) {
//             $scope.ignitionCounter = 500;
//             if ($scope.totalAmountOfItemsInThisColletection <= 999999999) {
//                 $scope.customAdd($scope.userVOTE);
//             } else {
//                 $scope.deleteAll();
//                 $scope.customAdd($scope.userVOTE);
//             }
//         } else {
//             // JACKPOT
//             $scope.ignitionCounter = 10000;
//             $scope.collectionPlate();
//             // JACKPOT
//         }
//     }, 10000);
// }, 500);
$scope.customAdd=function(userVote){alloyService.postQuestionOne($scope.userVOTE,function(response){console.log("DONE");$scope.collectionPlate();});};$scope.addVoteFromForm=function(x){// check to make sure the form is completely valid
if($scope.voteForm.$valid){console.log($scope.question_1);console.log('our form is amazing');if(x==='yes'){$scope.userVOTE={location:$scope.question_1.name,data:{ip:$scope.userIP,yes:1,no:0}};}else{$scope.userVOTE={location:$scope.question_1.name,data:{ip:$scope.userIP,yes:0,no:1}};}console.log($scope.userVOTE);if($scope.authenticated){alloyService.postQuestionOne($scope.userVOTE,function(response){$scope.collectionPlate();});}else{alert("You cannot vote twice.");}}};$scope.openNav=function(){document.getElementById("myNav").style.width="100%";};$scope.closeNav=function(){document.getElementById("myNav").style.width="0%";};$scope.statesArr=[{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}];d3.select(self.frameElement).style("height","700px");d3.json("ballot-box",function(error,data){if(error)return console.warn(error);// console.log(data)
// console.log("data ^")
// var headers;
// data.forEach((d) => {
//     console.log(d)
//     headers = Object.keys(d.location);
//     // headers.forEach((header) => {
//     // })
// });
// Object.keys(data).forEach(function(key, index, error) {
//     console.log(key)
//         // console.log(index)
// });
// console.log(headers)
// THIS IS THE CANVAS - BASE STYLE
var canvas=d3.select(".svgContainer").append("svg").attr("width",720).attr("height",1700);// THIS IS ADDING DATA TO THE CANVAS
canvas.selectAll('rect').data(data).enter().append('rect').attr('width',function(d){console.log(d.data);// console.log(d.location)
return d.data.yes*25;}).attr('height',50).attr('y',function(d,i){return i*80;}).attr("fill","rgba(0, 107, 148, .5)");canvas.selectAll('text').data(data).enter().append('text').attr("fill","#ffffff").attr('y',function(d,i){return i*80+25;}).attr('x',5).text(function(d){console.log(d);console.log(d.data.state);return d.data.state;});// visualizeit();
});// var pie = new d3pie("pie", {
//     header: {
//         title: {
//             text: "Another Pie"
//         }
//     },
//     data: {
//         content: [
//             { label: "One", value: 264131 },
//             { label: "Two", value: 218812 },
//             { label: "Three", value: 157618 }
//         ]
//     },
//     callbacks: {
//         onClickSegment: function(a) {
//             alert("Segment clicked! See the console for all data passed to the click handler.");
//             console.log(a);
//         }
//     }
// });
var dataPIE=[];// Get JSON data and wait for the response
d3.json("ballot-box",function(error,json){$.each(json,function(d,i){dataPIE.push({state:d.data.state,yes:d.data.yes,no:d.data.no,value:i});});var pie=new d3pie("pieChart",{"header":{"title":{"text":"Traffic Sources","fontSize":22,"font":"verdana"}},"size":{"canvasHeight":400,"canvasWidth":590},"data":{"content":dataPIE},"labels":{"outer":{"pieDistance":32}}});});// DEPRECATED
// $scope.getVoteSplit = function() {
//     alloyService.getVoteSplitCount(function(response) {
//     });
//     $scope.refresh();
// }
// $scope.addVote = function(x) {
//     $scope.userVOTE = {
//         ip: $scope.userIP,
//         answer: x,
//         location: $scope.statesArr_proxy[75].name
//     }
//     console.log($scope.question_1)
//     if ($scope.authenticated) {
//         alloyService.postVotes($scope.userVOTE, function(response) {
//             $scope.collectionPlate();
//         })
//         angular.element(document.querySelector('.ghost-botton'), function() {
//             this.addClass('animated bounce');
//         })
//     } else {
//         alert("You cannot vote twice.")
//     }
// }
});'use strict';console.log("OUTSIDE: alloy Directive");angular.module("main").directive('inject',function(){console.log("INSIDE: alloy Directive");return{templateUrl:'../templates/inject.html',controller:'alloyController',replace:false};});'use strict';console.log("OUTSIDE: alloy Service");//angular.module("main")
app.service('alloyService',function($http){console.log("INSIDE: alloy Service");this.getVotes=function(callback){$http({url:'/calexit',method:"GET"}).then(callback);};this.postVotes=function(params,callback){$http({url:'/calexit',method:"POST",data:params}).then(callback);};this.postQuestionOne=function(params,callback){$http({url:'/calexit-question-1',method:"POST",data:params}).then(callback);};this.delAllVotes=function(id,callback){console.log("success from delHomeBrew");$http({url:'/del-all/',method:"GET"}).then(callback);};this.getVoteCount=function(callback){$http({url:'/get-count',method:"GET"}).then(callback);};this.writeToDisk=function(query,callback){console.log("success from getHomeBrew");$http({url:'/write',method:"POST",data:query}).then(callback);};this.handShake=function(callback){$http({url:'http://ipinfo.io',method:"get"}).then(callback);};// DEPRECATED
this.getVoteSplitCount=function(callback){$http({url:'/split-query',method:"POST"}).then(callback);};});