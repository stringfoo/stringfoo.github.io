'use strict';

angular.module('App')
	.controller('registrantsCtrl', function ($scope) {
		$scope.registrants = [];
		$scope.registrant = {};

		$scope.register = function() {
			console.log($scope.registrant);
			$scope.registrants.push($scope.registrant);
			$scope.registrant = {};
			$scope.registrationForm.$setPristine();
			console.log($scope.registrants);
		};

		$scope.removeRegistrant = function (testing) {
			$scope.registrants.splice(testing, 1);
			console.log($scope.registrants);
		};

})