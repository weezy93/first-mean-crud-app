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
.controller('signUpController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {
  $scope.title = 'Register';
  $scope.user = {};
  $scope.register = function () {
    authService.register($scope.user)
    .then(function (user) {
      authService.setUserInfo(user);
      $location.path('/');
    })
    .catch(function (err) {
      // check status code, send appropriate message
      console.log(err);
    });
  };
}])
.controller('loginController', ['$scope', '$location' 'authService', function ($scope,  $location, authService) {
  $scope.title = 'Log In';
  $scope.user = {};
  $scope.login = function () {
    authService.login($scope.user)
    .then(function (user) {
      authService.setUserInfo(user);
      $location.path('/');
    })
    .catch(function (err) {
      // check status code, send appropriate message
      console.log(err);
    });
  };
}]);
