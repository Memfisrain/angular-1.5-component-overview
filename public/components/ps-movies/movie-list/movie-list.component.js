(function() {
	"use strict";

	const module = angular.module("psMovies");

	function fetchMovies($http) {
		return $http.get("/movies.json")
									.then(response => response.data)
	}

	function controller($http) {
			let model = this;

			model.movies = [];

			model.$onInit = function() {
				fetchMovies($http)
					.then(movies => {
						model.movies = movies;
					})
					.catch(err => {
						console.error(err);
					});
			};

			model.message = "Hello from a component component";

			model.setMessage = function() {
				model.message = model.newMessage;
			};

			model.rateUp = function(movie) {
				movie.rating = movie.rating + 1 > 5? 5 : movie.rating + 1;
			};

			model.rateDown = function(movie) {
				movie.rating = movie.rating -1 < 1? 1 : movie.rating - 1;
			};
		}

	module.component("movieList", {
		templateUrl: "/public/components/ps-movies/movie-list/movie-list.component.html",
		controllerAs: "model",
		controller: ["$http", controller]
	});

})();