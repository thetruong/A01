var index = angular.module('index', ['ngRoute', 'ngAnimate']);

index.config(function($routeProvider){
	$routeProvider.
	//**Home Page**
		//index for app
		when('/', {
			templateUrl: 'partials/index.html'
		})
		//index when 'Quiz App' is clicked
		.when('/index',{
			templateUrl: 'partials/index.html'
		})

		//Marvel home page
		.when('/MarvelPage', {
			templateUrl: 'partials/quiz_marvel.html',
			controller: 'MarvelController'
		})
		//DC home page
		.when('/DCPage', {
			templateUrl: 'partials/quiz_dc.html',
			controller: 'DCController'
		})

	//Quiz Page
		.when('/MarvelAnswers', {
				templateUrl: "partials/marvel_answers.html"
		})
		.when('/DCAnswers', {
				templateUrl: "partials/dc_answers.html"
		})

	//**404 Error**
		.otherwise({
			redirectTo: '/'
		});
});

//**controller for the quiz**
index.controller('MarvelController', function($scope){
	$scope.userInput = {};
	$scope.answers = {};
});
index.controller('DCController', function($scope){
	$scope.userInput = {};
	$scope.answers = {};
});
