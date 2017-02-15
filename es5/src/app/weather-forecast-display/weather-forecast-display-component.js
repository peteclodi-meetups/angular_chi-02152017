(function(app) {
    app.WeatherForecastDisplayComponent =
        ng.core.Component({
            selector: 'weather-forecast-display',
            templateUrl: './weather-forecast-display-component.html',
            styleUrls: ['./weather-forecast-display-component.css'],
            // ES5 version of @Input()
            inputs: [ 'forecast' ]
        })
        .Class({
            constructor: function() {
            }
        });
})(window.app || (window.app = {}));
