(function () {
  "use strict";
  angular
    .module('main')
    .directive('spinningCage', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: 'flipping.html',
        controller: 'MainController',
        link: function (scope, element, attributes) {

        }
      };
    });

})();
