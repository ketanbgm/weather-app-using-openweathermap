app.controller('weatherController', function ($scope, $http, Config) {

$scope.init = function () {
	console.log("inside init")
     if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition($scope.showPosition);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
};


$scope.showPosition =function(position) {
    console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
    Config()
    .then(function(config) {
      //$http.get(config.apiUrl);
      console.log(config.data.apiUrl);
    });
}
})