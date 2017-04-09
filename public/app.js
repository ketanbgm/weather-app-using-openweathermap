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

app.filter('timestampToTime', function() {

  return function(input) {
    var output = moment.unix(input).format("HH:mm a");

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
    var output = moment.unix(input).format("dddd");
    return output;
  }
})
app.directive('hcChart', function () {
                return {
                    restrict: 'E',
                    template: '<div></div>',
                    scope: {
                        options: '='
                    },
                   link: function (scope, element) {

Highcharts.chart(element[0], scope.options);

scope.$watch('options', function(newVal) {
if (newVal) {
Highcharts.chart(element[0], scope.options);
console.log("I see a data change!");
}
}, true);
}
                };
            })

