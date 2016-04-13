angular.module('studentApp')
.controller('addStudentController', ['$scope', 'studentDataService', function ($scope, studentDataService) {
  $scope.model = {};

  $scope.updateStudents = function() {
    studentDataService.getAllStudents()
    .then(function (students) {
      $scope.allStudents = students.data.data;
    });
  }
  $scope.updateStudents();

  $scope.student = {};

  $scope.addStudent = function () {
    console.log($scope.student);
    studentDataService.addStudent($scope.student);
    $scope.student = {};
    $scope.updateStudents();
  }
}]);
