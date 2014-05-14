'use strict';

var app = angular.module('angularjsYoApp', []);
 
 app.controller('MainCtrl', function ($scope) {
 //ng-model directive
	$scope.name = 'Senthil S';
//ng-bind directive
	$scope.inputValue = 'UX Engineer';
//ng-repeat directive
	$scope.awesomeThings = [
	  { name:'HTML5 Boilerplate' },
	  { name:'AngularJS' },
	  { name:'Karma' }
	];
//ng-repeat directive in table format
	$scope.persons = [
	{ name: 'Senthil', email: 'ssthil@gmail.com', phone: '98005761' },
	{ name: 'Selva', email: 'selva@gmail.com', phone: '96004562' },
	{ name: 'Raaj', email: 'raaj@gmail.com', phone: '96543201' }
	];
	
  });
  
