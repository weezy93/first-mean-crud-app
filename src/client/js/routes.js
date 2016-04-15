angular.module('studentApp')
.config(function ($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../partials/main.html',
    controller: 'addStudentController',
    restricted: true,
    preventLoggedIn: false
  })
  .when('/register', {
    templateUrl: '../partials/signup.html',
    controller: 'signUpController',
    restricted: false,
    preventLoggedIn: true,
  })
  .when('/login', {
    templateUrl: '../partials/login.html',
    controller: 'loginController',
    restricted: false,
    preventLoggedIn: true
  })
  .when('/logout', {
    restricted: false,
    preventLoggedIn: false
  })
  .otherwise('/');
  $httpProvider.interceptors.push('authInterceptor');
});

angular.module('studentApp').run( function ($rootScope, $location, $window, authService) {

  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    // next is route we're going to
    // if restricted and no token
    if (next.restricted && !$window.localStorage.getItem('token')) {
      $location.path('/login');
    }

    if (next.preventLoggedIn && $window.localStorage.getItem('token')) {
      $location.path('/');
    }
   });
});
