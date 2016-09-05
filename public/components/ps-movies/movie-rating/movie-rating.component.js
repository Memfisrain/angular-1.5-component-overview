(function() {
	"use strict";

	const module = angular.module("psMovies");

	module.component("movieRating", {
		templateUrl: "/public/components/ps-movies/movie-rating/movie-rating.component.html",
		bindings: {
			value: "<",
			max: "<"
		},
		controllerAs: "model",
		controller: function() {
			let model = this;

			function buildEntries(value, max) {
				var entries = [];

				for (var i = 1; i <= max; i++) {
					var className = i <= value? "glyphicon glyphicon-star" : "glyphicon glyphicon-star-empty";
					entries.push(className);
				}

				return entries;
			}

			model.$onInit = function() {
				model.entries = buildEntries(model.value, model.max);
			};

			model.$onChanges = function() {
				model.entries = buildEntries(model.value, model.max);
			}
		}
	});
})();		