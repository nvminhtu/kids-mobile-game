var services = angular.module('kid_game.services', [])
var menu_lists = [{
        "id" : 0,
        "name" : "0 1 2 3 4 5 6 ...",
        "code" : "numbers"
      },
      {
        "id" : 1,
        "name" : "A B C D E F G ...",
        "code" : "alphabet"
      }];

  var menu_items =  [{
        "id" : 0,
        "name" : "Counting",
        "code" : "counting",
        "parent_id" : 0
      },{
        "id" : 1,
        "name" : "Reading",
        "code" : "reading",
        "parent_id" : 0
      },{
        "id" : 2,
        "name" : "Random",
        "code" : "random",
        "parent_id" : 0
      },{
        "id" : 3,
        "name" : "Reading",
        "code" : "reading",
        "parent_id" : 1
      }];
var alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
services.factory('Menu',function($filter){
  return {
    all: function() {
      return menu_lists;
    },

    get: function(code) {
      return $filter('filter')(menu_lists, {code: code})[0];
    }
  };
});

services.factory('MenuItems',function($filter){

  return {
    all: function(parent_id) {
      return $filter('filter')(menu_items, { parent_id: parent_id });
    },

    get: function(code) {
      for (var i = 0; i < menu_items.length; i++) {
        if (menu_items[i].code === code) {
          return menu_items[i];
        }
      }
      return null;
    }
  };
});

services.factory('MenuItemDetail',function($filter){

  return {
    all: function(parent_id) {
      return $filter('filter')(menu_items, { parent_id: parent_id });
    },

    get: function(code) {
      for (var i = 0; i < menu_items.length; i++) {
        if (menu_items[i].code === code) {
          return menu_items[i];
        }
      }
      return null;
    }
  };
});

services.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);
      return q.promise;
    }
  }
}]);