angular.module('studentApp')
.directive('allStudents', function () {
  return {
    restrict: 'E',
    templateUrl: '../directives/allStudents.html',
  }
})
.directive('navigationBar', function () {
  return {
    restrict: 'E',
    templateUrl: '../directives/navigationBar.html'
  }
});
