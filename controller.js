var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', '$http', 'serviceId' , function($scope, $http, serviceId) {

  $scope.dictionary = serviceId;

}]);

myApp.factory('serviceId', ['$http', function($http){ 
    return {
        "hello": "Hello World"
    };
}]);
