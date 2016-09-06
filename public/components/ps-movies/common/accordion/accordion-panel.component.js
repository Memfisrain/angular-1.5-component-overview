/**
 * Created by Nikita_Kulazhenko on 9/6/2016.
 */
(function() {
  "use strict";

  const module = angular.module("psMovies");

  module.component("accordionPanel", {
    templateUrl: "/public/components/ps-movies/common/accordion/accordion-panel.component.html",
    transclude: true,
    require: {
      parent: "^accordion"
    },
    bindings: {
      heading: "@",
      selectPanel: "&"
    },
    controllerAs: "model",
    controller: function() {
      let model = this;

      model.selected = false;

      model.selectPanel = function() {
        model.parent.selectPanel(model);
      };

      model.turnOn = function() {
        model.selected = true;
      };

      model.turnOff = function() {
        model.selected = false;
      };

      model.$onInit = function() {
        model.parent.addPanel(model);
      };
    }
  });
})();
