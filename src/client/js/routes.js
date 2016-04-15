angular.module('studentApp')
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../partials/main.html',
    controller: 'addStudentController'
  })
  .when('/students', {

  })
  .otherwise('/');
});
