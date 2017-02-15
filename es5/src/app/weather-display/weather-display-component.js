(function(app) {
    app.WeatherDisplayComponent =
        ng.core.Component({
            selector: 'weather-display',
            templateUrl: 'app/weather-display/weather-display-component.html',
            styleUrls: ['app/weather-display/weather-display-component.css'],
            entryComponents: [app.PickLocationDialogComponent, app.WeatherForecastDisplayComponent],
            viewProviders: [ng.material.MdDialog]
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

            pickLocation: function() {
                // Perform this assignment because MdDialogRef cannot be injected into
                // app.PickLocationDialogComponent in ES 5
                var dialogRef = this.mdDialog.open(app.PickLocationDialogComponent);
                dialogRef.componentInstance.mdDialogRef = dialogRef;
            },
        });
})(window.app || (window.app = {}));
