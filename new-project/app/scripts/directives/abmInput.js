'use strict';

angular.module('pruebaApp').
	directive('abmInput', function (){
	return {
		restrict : 'E',
		scope : {
			myFunctionData : '=inputData',
			myColName : '=colName',
			myType : '=type',
			myOutputData : '=outputData'
		},
		replace : true,
		templateUrl : '/views/abmInput.html',
		controller : function($scope){
			console.log($scope.myType);
			console.log($scope.myColName);
			console.log($scope.myFunctionData);
			console.log($scope.myOutputData);
		}	
	};
	
}); 