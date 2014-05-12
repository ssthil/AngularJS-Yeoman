'use strict';

var app = angular.module('angularjsYoApp', []);
 
 app.controller('MainCtrl', function ($scope) {
 //ng-model directive
	$scope.name = " Senthil S";
//ng-bind directive
	$scope.inputValue = "UX Engineer";
//ng-repeat directive
    $scope.awesomeThings = [
      {name:'HTML5 Boilerplate'},
      {name:'AngularJS'},
      {name:'Karma'} 
    ];
//

  });
  
