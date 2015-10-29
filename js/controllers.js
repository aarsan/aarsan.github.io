ghapp.controller('Controller1', function ($scope, $http) {
	$http.get('http://localhost:8000/people/all').success(function(data) {
	$scope.mydata = data;
	});
});