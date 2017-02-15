(function(app) {
    app.WeatherDisplayComponent =
        ng.core.Component({
            selector: 'weather-display',
            templateUrl: './weather-display-component.html',
            styleUrls: ['./weather-display-component.css'],
            entryComponents: [app.WeatherForecastDisplayComponent],
            viewProviders: [ng.material.MdDialog, app.WeatherService]
        })
        .Class({
            constructor: [ng.material.MdDialog, app.WeatherService, function(mdDialog, WeatherService) {
                this.mdDialog = mdDialog;
                this.weatherService = WeatherService;
            }],

            ngOnInit: function() {
                this.locationSubscription = this.weatherService.locationSubject.subscribe(zipCode => {
                    this.currentZipCode = zipCode;
                    this.weatherSubscription = this.weatherService.weatherSubject.subscribe(weather => {
                        this.weather = weather;
                    });
                });
            },

            ngOnDestroy: function() {
                if(this.locationSubscription) {
                    this.locationSubscription.unsubscribe();
                }
                if(this.weatherSubscription) {
                    this.weatherSubscription.unsubscribe();
                }
            },

            pickLocation: [app.PickLocationDialogComponent, function(pickLocationDialogComponent) {
                this.mdDialog.open(pickLocationDialogComponent);
            }],

            toString: function() {
                return 'WeatherDisplayComponent';
            }
        });
})(window.app || (window.app = {}));
