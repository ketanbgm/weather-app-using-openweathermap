app.controller('weatherController', function ($scope, $http, Config, Cities) {

    $scope.init = function () {
        console.log("inside init")
        if (navigator.geolocation) {
            var geo = navigator.geolocation.getCurrentPosition($scope.getWeather);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };


    $scope.getWeather = function (position) {
        Config()
            .then(function (config) {
                $scope.url = config.data.apiUrl;
                console.log($scope.url)
                // get data by city name
                if ($scope.cityName) {
                    $scope.query = $scope.url + 'weather?q=' + $scope.cityName + '&&APPID=5562f355df8fce1bb3108f75c8de2889';

                } else {
                    //on load get data by latitude and longitude
                    var lat = position.coords.latitude;
                    var lng = position.coords.longitude;
                    $scope.query = $scope.url + 'weather?lat=' + lat + '&lon=' + lng + '&&APPID=5562f355df8fce1bb3108f75c8de2889';
                    console.log($scope.query)
                }
                $http.get($scope.query)
                    .then(function (res) {
                        $scope.data = res.data;
                        $scope.date = new Date();
                        //console.log($scope.data)
                        var getNext = $scope.url + 'forecast?id='+$scope.data.id+'&&APPID=5562f355df8fce1bb3108f75c8de2889';
                        // Get the data of next 3 hours
                        $http.get(getNext)
                            .then(function (nextData) {
                              //  console.log(nextData)
                                $scope.nextData = nextData.data.list;
                                $scope.getNext =  $scope.url + 'forecast/daily?id='+$scope.data.id+'&&APPID=5562f355df8fce1bb3108f75c8de2889';
                                    console.log($scope.getNext)
                                     $http.get($scope.getNext)
                                     .then(function(sevenDays){
                                         $scope.sevenDays = sevenDays.data.list;
                                        // $scope.temp = $scope.sevenDays.list[0].temp.max;
                                        console.log($scope.sevenDays);
                                     })
                                     .catch(function(err){

                                     })
                            })
                            .catch(function (err) {
                                console.log(err);
                            })
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            });

    }
})