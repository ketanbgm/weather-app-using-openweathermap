var app = angular.module('app', []);

app.service('Config', function($http) {
  return function() {
    return $http.get('config.json');
  };
});

app.service('Cities', function($http) {
  return function() {
    return $http.get('city.json');
  };
});

app.filter('dateFilter', function() {

  return function(input) {
    var output =  moment(input).format("MM-DD HH:mm a");

    // Do filter work here

    return output;

  }

});

app.filter('degreeFilter', function(){
  return function(input){
    var output = input - 273.15;
    return output;
  }
})

app.filter('timeStampToDay', function(){
  return function(input){
    var output = moment.unix(input).format("dddd");;
    return output;
  }
})

