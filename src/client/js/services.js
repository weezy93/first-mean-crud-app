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

    deletStudent: function () {
      crudService.deleteOne()
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
    deleteOne: function () {
      // delete Student;
    }
  }
}]);
