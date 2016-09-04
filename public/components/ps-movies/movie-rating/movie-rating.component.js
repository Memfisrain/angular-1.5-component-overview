(function() {
	"use strict";

	const module = angular.module("psMovies");

	module.component("movieRating", {
		templateUrl: "/public/components/ps-movies/movie-rating/movie-rating.component.html",
		transclude: true,
		bindings: {
			value: "<"
		},
		controllerAs: "model",
		controller: function() {
			let model = this;

			model.$onInit = function() {
				model.entries = new Array(model.value);
			};

			model.$onChanges = function() {
				model.entries = new Array(model.value);
			}
		}
	});
})();		