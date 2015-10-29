var ghapp = angular.module('ghapp', ['ngRoute']);


ghapp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/dashboard', {
				templateUrl: 'dashboard.html',
				controller: 'Controller1'  
			}).
			when('/404', {
				templateUrl: '404.html',
				controller: 'Controller1'
			}).
			otherwise({
				redirectTo: '/404'
			});
}]);