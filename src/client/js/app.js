angular.module('studentApp', []);

angular.module('studentApp')
.controller('myController', ['$scope', function ($scope) {
  $scope.greeting = 'hello world';
}]);
