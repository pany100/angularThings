'use strict';

/**
 * @ngdoc function
 * @name pruebaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pruebaApp
 */
angular.module('pruebaApp')
  .controller('MainCtrl', ['$scope', 'CitiesFactory', function ($scope, CitiesFactory) {
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
 	CitiesFactory.getCities().then(function(){
 		$scope.cities = CitiesFactory.messages;	
 	})

 }]);
