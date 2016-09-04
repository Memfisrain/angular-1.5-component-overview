(function() {
	"use strict";

	const module = angular.module("psMovies");

	module.component("movieApp", {
		templateUrl: "public/components/ps-movies/movie-app/movie-app.component.html",
		$routeConfig: [
			{path: "/list", component: "movieList", name: "List"},
			{path: "/about", component: "appAbout", name: "About"},
			{path: "/**", redirectTo: ["List"]}
		]
	});
})();