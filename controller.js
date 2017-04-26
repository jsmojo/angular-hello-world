// var MyController = angular.module('MyController', []);
 //var dataText = require("./hello.json");

// MyController.controller('MyController', ['$scope', '$http', function($scope, $http) {
//     $http.get('/api/dude').
//     success(function(data) {
//         $scope.dude = data;
//     });

// }]);

// console.log(dudeObj);

var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', '$http', 'serviceId' , function($scope, $http, serviceId) {

  $scope.dictionary = serviceId;

}]);

myApp.factory('serviceId', ['$http', function($http){ 
    return {
        "hello": "Hello World"
    };
}]);