(function() {
  "use strict";

  const module = angular.module("psMovies");

  module.component("accordion", {
    templateUrl: "/public/components/ps-movies/common/accordion/accordion.component.html",
    transclude: true,
    controllerAs: "model",
    controller: function() {
      let model = this;

      var panels = [];

      model.addPanel = function(panel) {
        panels.push(panel);

        if (panels.length) {
          panels[0].selected = true;
        }
      };

      model.selectPanel = function(panel) {
        panels.forEach(p => {
          if(p === panel) {
            p.turnOn();
          } else {
            p.turnOff();
          }
        });
      };
    }
  });

})();