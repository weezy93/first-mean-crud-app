angular.module('studentApp')
.service('studentDataService', ['crudService',function (crudService) {
  return {
    getAllStudents: function () {
      crudService.getAll('students')
      .then(function (students) {
        console.log(students);
        return students;
      });
    }
  }
}])
.service('crudService', ['$http', function ($http) {
  return {
    getAll: function (resource) {
      $http.get('/' + resource)
      .then(function (results) {
        return results;
      })
      .catch(function (err) {
        console.log(err);
      });
    },
    getOne: function (resource) {
      // return data;
    },
    addOne: function () {
      // add student
    },
    deleteOne: function () {
      // delete Student;
    }
  }
}]);
