(function() {
	"use strict";

	const module = angular.module("psMovies");

	module.component("movieDetail", {
		templateUrl: "/public/components/ps-movies/movie-detail/movie-detail.component.html",
		$routeConfig: [
			{path: "/overview", component: "detailOverview", name: "Overview"},
			{path: "/cast", component: "detailCast", name: "Cast"},
			{path: "/director", component: "detailDirector", name: "Director"}
		],
		controllerAs: "model",
		controller: function() {
			let model = this;

			model.$routerOnActivate = function(toRoute, fromRoute) {
				model.id = toRoute.params.id;
			};
		}
	});

	module.component("detailOverview", {
		template: "Here is the movie overview"
	});

	module.component("detailCast", {
		template: "Here is the movie cast"
	});

	module.component("detailDirector", {
		template: "Here is the movie director"
	});

})();