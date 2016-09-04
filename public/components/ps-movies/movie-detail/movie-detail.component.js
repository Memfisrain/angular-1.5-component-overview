(function() {
	"use strict";

	const module = angular.module("psMovies");

	module.component("movieDetail", {
		templateUrl: "/public/components/ps-movies/movie-detail/movie-detail.component.html",
		/*$canActivate: function($timeout) {
			return $timeout(() => true, 2000);
		},*/
		controllerAs: "model",
		controller: function() {
			let model = this;

			model.$routerOnActivate = function(toRoute, fromRoute) {
				model.id = toRoute.params.id;
			};
		}
	});

})();