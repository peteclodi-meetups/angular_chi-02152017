(function(app) {
    app.WeatherForecastDisplayComponent =
        ng.core.Component({
            selector: 'weather-forecast-display',
            templateUrl: 'app/weather-forecast-display/weather-forecast-display-component.html',
            styleUrls: ['app/weather-forecast-display/weather-forecast-display-component.css'],
            inputs: [ 'forecast' ]
        })
        .Class({
            constructor: function() {
            }
        });
})(window.app || (window.app = {}));
