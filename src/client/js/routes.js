angular.module('studentApp')
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../partials/main.html',
    controller: 'addStudentController'
  })
  .when('/register', {
    templateUrl: '../partials/signup.html',
    controller: 'signUpController'
  })
  .when('/login', {
    templateUrl: '../partials/login.html',
    controller: 'loginController'
  })
  .when('/logout', {})
  .otherwise('/');
});
