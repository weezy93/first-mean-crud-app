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
  };

  $scope.deleteStudent = function (student) {
    studentDataService.deleteStudent(student)
    $scope.updateStudents();
  }
}])
.controller('signUpController', ['$scope', function ($scope ) {
  $scope.title = 'Register';
  $scope.user = {};
  $scope.register = function () {
    console.log($scope.user);
  };
}])
.controller('loginController', ['$scope', function ($scope) {
  $scope.title = 'Log In';
  $scope.user = {};
  $scope.login = function () {
    console.log($scope.user);
  }
}]);
