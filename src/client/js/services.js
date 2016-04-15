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
      crudService.deleteOne("students/delete/" + student._id)
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
    deleteOne: function (resource) {
      return $http.delete('/' + resource)
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
}]);
