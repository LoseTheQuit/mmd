'use strict';

console.log("OUTSIDE: alloy Controller");
app.controller('alloyController', function($scope, $http, alloyService, lodash, $uibModal, $log, $document) {
  console.log("INSIDE: alloy Controller");

  $scope.items = [{
    time: '9 a.m.',
    taken: false,
    firstName: '',
    lastName: '',
    phoneNumber: ''
  }, {
    time: '10 a.m.',
    taken: false,
    firstName: '',
    lastName: '',
    phoneNumber: ''
  }, {
    time: '11 a.m.',
    taken: false,
    firstName: '',
    lastName: '',
    phoneNumber: ''
  }, {
    time: '12 p.m.',
    taken: false,
    firstName: '',
    lastName: '',
    phoneNumber: ''
  }, {
    time: '1 p.m.',
    taken: false,
    firstName: '',
    lastName: '',
    phoneNumber: ''
  }, {
    time: '2 p.m.',
    taken: false,
    firstName: '',
    lastName: '',
    phoneNumber: ''
  }, {
    time: '3 p.m.',
    taken: false,
    firstName: '',
    lastName: '',
    phoneNumber: ''
  }, {
    time: '4 p.m.',
    taken: false,
    firstName: '',
    lastName: '',
    phoneNumber: ''
  }, {
    time: '5 p.m.',
    taken: false,
    firstName: '',
    lastName: '',
    phoneNumber: ''
  }];

  $scope.animationsEnabled = true;

  $scope.selected = {

    // item: $scope.items[0].time,
    // firstName: '',
    // lastName: '',
    // phoneNumber: ''

  };

  $scope.doItWatson = 0;

  $scope.sudo = function(x) {

    // console.log("INDEX: " + $scope.modalIndex);
    // console.log($scope.items[x].time);

    for (var thisX = 0; thisX <= $scope.items.length; thisX++) {
      if ($scope.selected[x] === undefined) {
        console.log("NOOO")

      } else {
        console.log($scope.selected[x].index);
        $scope.doItWatson = x;

        $scope.items[$scope.doItWatson].firstName = $scope.selected.firstName;
        $scope.items[$scope.doItWatson].lastName = $scope.selected.lastName;
        $scope.items[$scope.doItWatson].phoneNumber = $scope.selected.phoneNumber;

      }
    }

    $scope.items = _.filter($scope.items, function(line, x) {

      for (var thisX = 0; thisX <= $scope.items.length; thisX++) {
        if ($scope.selected[x] === undefined) {
          console.log("NOOO")

        } else {
          console.log($scope.selected[x].index);
          $scope.doItWatson = x;

          $scope.items[$scope.doItWatson].firstName = $scope.selected.firstName;
          $scope.items[$scope.doItWatson].lastName = $scope.selected.lastName;
          $scope.items[$scope.doItWatson].phoneNumber = $scope.selected.phoneNumber;

        }
      }

      var tempOBJ;
      if (line.taken && $scope.doItWatson) {

        $scope.doItWatson++;

        tempOBJ = {
          time: line.time,
          taken: line.taken,
          firstName: $scope.selected.firstName,
          lastName: $scope.selected.lastName,
          phoneNumber: $scope.selected.phoneNumber
        };


        $scope.items[x].firstName = '';
        $scope.items[x].lastName = '';
        $scope.items[x].phoneNumber = '';

        $scope.items[$scope.doItWatson].firstName = $scope.selected.firstName;
        $scope.items[$scope.doItWatson].lastName = $scope.selected.lastName;
        $scope.items[$scope.doItWatson].phoneNumber = $scope.selected.phoneNumber;
        $scope.items[$scope.doItWatson].falsy = false

        // console.log(tempOBJ);
        // console.log(x);

        return tempOBJ;

      } else {

        $scope.items[x].firstName = '';
        $scope.items[x].lastName = '';
        $scope.items[x].phoneNumber = '';
        $scope.items[x].tapped = true;


        tempOBJ = {
          time: line.time,
          taken: line.taken,
          firstName: '',
          lastName: '',
          phoneNumber: ''
        };

        return tempOBJ;

      }


      // $scope.items[passX].taken = false;

    })

    // $scope.finalTally[x].time = $scope.items[x].time;
    // $scope.finalTally[x].taken = $scope.items[x].taken;                     

    // $scope.items.push($scope.selected);

    // $scope.items.firstName = $scope.selected.firstName;
    // $scope.items.lastName = $scope.selected.lastName;
    // $scope.items.phoneNumber = $scope.selected.phoneNumber;

    // $scope.items = _.uniqBy($scope.items, function(e) {
    //   return e;
    // });

    console.log($scope.items);

  };

  $scope.open = function(size, parentSelector) {

    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.mmd-modal' + parentSelector)) : undefined;

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: '../templates/modal.html',
      controller: function($uibModalInstance, items) {

        $scope.ok = function() {
          // $uibModalInstance.close($scope.selected.item);
          $uibModalInstance.close($scope.selected);
          $scope.sudo();
        };

        $scope.cancel = function() {
          $uibModalInstance.dismiss('cancel');
        };

      },
      size: size,
      scope: $scope,
      resolve: {
        items: function() {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function(selectedItem) {
      $scope.selected = selectedItem;
    }, function() {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };

  $scope.toggleAnimation = function() {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

  $scope.openNav = function() {
    document.getElementById("myNav").style.width = "100%";
  }

  $scope.closeNav = function() {
    document.getElementById("myNav").style.width = "0%";
  }

});
