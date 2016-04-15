angular.module('studentApp')
.service('studentDataService', ['crudService',function (crudService) {

  return {
    getAllStudents: function () {
      return crudService.getAll('students')
      .then(function (students) {
        return students;
      });
    },

    addStudent: function (payload) {
      crudService.addOne('students/new', payload)
      .then(function (student) {
        return student;
      });
    },

    deleteStudent: function (student) {
      crudService.deleteOne("students/" + student._id)
      .then(function () {
        console.log('here');
        return student;
      })
      .catch(function (err) {
        console.log(err);
        return err;
      });
    }
  }
}])

.service('crudService', ['$http', function ($http) {

  return {
    getAll: function (resource) {
      return $http.get('/' + resource)
      .then(function (results) {
        return results;
      })
      .catch(function (err) {
        return err;
      });
    },
    getOne: function (resource, payload) {

    },
    addOne: function (resource, payload) {
      return $http.post('/' + resource, payload)
      .then(function (res) {
        return res;
      })
      .catch(function (err) {
        return err;
      });
    },
    deleteOne: function (resource, student) {
      return $http.delete('/' + resource )
      .then(function (res) {
        console.log('res', res);
        return res;
      })
      .catch(function (err) {
        return err;
      });
    },
    updateOne: function (resource, payload) {
      // update
    }
  }
}])
/**
1. login
2. logout
3. register
4. set user info into localstorage
5. get user info from localstorage

**/
.service('authService', ['$http', '$window', function ($http, $window) {
  var user = {};
  return {
    // register user
    register: function (user) {
      return $http.post('/auth/register', user);
    },
    // login user
    login: function (user) {
      return $http.post('/auth/login', user);
    },
    // get user info
    logout: function (user) {
      user = null;
      // clear local storage which holds jwt
      $window.localStorage.clear();
    },
    setUserInfo: function (userData) { // user object and token
      // userData is what is sent from auth routes
      $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user));
      $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
    },
    getUserInfo: function (userData) {
      $window.localStorage.getItem('user');
    }

  }
}])
.service('authInterceptor', ['$window', '$q', function ($window, $q) {
  return {
    // always make sure to return anything you use here!
    request: function(config) {
      // check for token in headers
      // config.headers['X-requested-with'] = XMLHttpRequest;
      var token = $window.localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = 'Bearer' + token;
      }
      return config;
    },
    responseError: function(err){
      // if header auth is not present throw an error
      console.log('response err', err);
      return err;
    }
  };
}]);
