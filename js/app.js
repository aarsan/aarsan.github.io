(function () {

	angular.module('app', []);

	var demoApp = angular.module('demoApp', ['ngRoute']);

	demoApp.config(['$routeProvider', function ($routeprovider) {

		$routeProvider
			.when('/', {
					controller: 'SimpleController',
					templateUrl: 'View1.html'
				})
			.when('partial2',
				{
					controller: 'SimpleController',
					templateUrl: 'View2.html'	
				})
			.otherwise({ redirectTo: '/' })

	}]);

	demoApp.controller('SimpleController', function($scope) {
		$scope.customers = [
			{name:'Ahmet',city:'Chicago'}, 
			{name:'Mary', city:'Courtland'}, 
			{name:'Ripley', city:'Michigan City'}, 
			{name:'Pickles', city:'Los Angeles'}
		];

		$scope.addCustomer = function () {
			$scope.customers.push(
				{ 
					name: $scope.newCustomer.name, 
				  	city: $scope.newCustomer.city });
		};
	});

}());