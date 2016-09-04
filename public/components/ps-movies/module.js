;(function() {
	"use strict";

	const module = angular.module("psMovies", ["ngComponentRouter"]);

	module.value("$routerRootComponent", "movieApp");

	module.component("appAbout", {
		template: "<h3>Here is the about Page</h3>"
	})
})();