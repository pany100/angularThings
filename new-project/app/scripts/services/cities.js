angular.module('pruebaApp')
  .factory('CitiesFactory', function ($q, $http) {
    'use strict';
    var exports = {};

    exports.messages = [];

    exports.getCities = function () {
      var deferred = $q.defer();
      return $http.get('http://localhost:8080/personas/list')
        .success(function (data) {
          exports.messages = data;
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
    };

    return exports;
  });
