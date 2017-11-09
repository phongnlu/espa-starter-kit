/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */

var app = angular.module('todomvc', ['ngRoute', 'ngResource']);
	app.config(function ($routeProvider, $locationProvider, $sceDelegateProvider) {
		'use strict';

		$sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'https://s3.amazonaws.com/**'
    ]);

		var routeConfig = {
			controller: 'todoCtrl',
			templateUrl: 'https://s3.amazonaws.com/phongtest123/config-based-spa/apps/angular1/todomvc-index.html',
			resolve: {
				store: function (todoStorage) {					
					// Get the correct module (API or localStorage).
					return todoStorage.then(function (module) {
						module.get(); // Fetch the todo records in the background.
						return module;
					});
				}
			}
		};

		$locationProvider.hashPrefix('');
		$routeProvider
			.when('/angular1', routeConfig)
			.when('/angular1/:status', routeConfig);
	});



