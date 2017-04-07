app.controller('weatherController', function ($scope, $http, Config,Cities) {

$scope.init = function () {
	console.log("inside init")
     if (navigator.geolocation) {
       var geo = navigator.geolocation.getCurrentPosition($scope.getWeather);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
};


$scope.getWeather = function(position){
    Config()
    .then(function(config) {
      $scope.url = config.data.apiUrl;
      console.log($scope.url)
        if($scope.cityName){
        $scope.query =  $scope.url+'?q='+$scope.cityName+'&&APPID=5562f355df8fce1bb3108f75c8de2889';
       
    } else{
       var lat = position.coords.latitude;
       var lng =  position.coords.longitude;
       $scope.query =  $scope.url+'?lat='+lat+'&lon='+lng+'&&APPID=5562f355df8fce1bb3108f75c8de2889';
       console.log($scope.query)
    }
     $http.get($scope.query)
     .then(function(res) {
         $scope.data = res.data;
         $scope.date = new Date();
         console.log($scope.data)
    })
    .catch(function(err){
        console.log(err);
    })
    });
  
}
})