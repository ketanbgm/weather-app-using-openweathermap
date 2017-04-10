app.directive('hcChart', function () {
    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
            options: '='
        },
        link: function (scope, element) {

            Highcharts.chart(element[0], scope.options);

            scope.$watch('options', function (newVal) {
                if (newVal) {
                    Highcharts.chart(element[0], scope.options);
                    console.log("I see a data change!");
                }
            }, true);
        }
    };
})