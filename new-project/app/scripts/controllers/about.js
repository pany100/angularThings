'use strict';

/**
 * @ngdoc function
 * @name pruebaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pruebaApp
 */
angular.module('pruebaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.input = function(){
    	return [
    	{ 
    		'key' : 1,
    		'value' : 'Boca juniors'
    	},
    	{ 
    		'key' : 2,
    		'value' : 'River Plate'
    	},
    	{ 
    		'key' : 3,
    		'value' : 'San Lorenzo'
    	},
    	{ 
    		'key' : 4,
    		'value' : 'Racing Club'
    	}];
    };

    $scope.returnObject = {};
  });
