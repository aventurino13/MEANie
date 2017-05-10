var myApp = angular.module('myApp', []);

myApp.controller('WhereMyPeeps', function($http) {

  var vm = this;

  vm.addRecord = function() {
    var objectToSend = {
      name: vm.nameIn,
      location: vm.locationIn,
    };
    $http({
      method: 'POST',
      url: '/testPost',
      data: objectToSend,
    }).then(function(response) {
      console.log(response);
      vm.getRecords();
    });

    vm.nameIn = '';
    vm.locationIn = '';
  };

  vm.getRecords = function() {
    $http({
      method: 'GET',
      url: '/getRecords',
    }).then(function success(response) {
      vm.allTheRecords = response.data;
      console.log(vm.allTheRecords);
      // }), function myError( response ){
      // console.log( response.statusText );
      // };//end myError
    }); //end getRecords
  };

  vm.deleteRecords = function(id) {
    $http({
      method: 'GET',
      url: '/deleteRecords/'+id,
    }).then(function success(response) {
      vm.getRecords();
      // }), function myError( response ){
      // console.log( response.statusText );
      // };//end myError
    }); //end getRecords
  };
});
