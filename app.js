(function(){
  "use strict";
  var underscore = angular.module('underscore',[]);
    underscore.factory('_',function(){
      return window._;
    });
    var jquery = angular.module('jquery',[]);
      jquery.factory('$',function(){
        return window._;
      });
angular
.module('main',[
  'ngRoute'
])
.config(function($routeProvider){
  $routeProvider
  .when('/',{
    controller: 'MainController'
  })
})

})();
// (function(){
//   "use strict";
//   var underscore = angular.module('underscore',[]);
//     underscore.factory('_',function(){
//       return window._;
//     });
//     var jquery = angular.module('jquery',[]);
//       jquery.factory('$',function(){
//         return window._;
//       });
//     angular
//       .module('admin',[
//         'ngRoute',
//         'underscore',
//         'ui.calendar',
//         'ui.bootstrap',
//       ])
//
//       .config(function ($routeProvider) {
//       $routeProvider
//         .when('/admins/:weddingId', {
//           templateUrl: 'app/admin/views/admin.list.html',
//           controller: 'AdminController as adminCtrl'
//         })
//         .otherwise({ redirectTo: '<'})
//
//     })
//
// })();
