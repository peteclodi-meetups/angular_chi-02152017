(function(app) {
    app.PickLocationDialogComponent =
        ng.core.Component({
            selector: 'pick-location-dialog',
            templateUrl: 'app/pick-location-dialog/pick-location-dialog-component.html',
            styleUrls: ['app/pick-location-dialog/pick-location-dialog-component.css']
        })
        .Class({
            constructor: [app.WeatherService, function(weatherService) {
                this.weatherService = weatherService;
            }],

            ngOnInit: function() {
                var self = this;
                this.locationSubscription = this.weatherService.locationSubject.subscribe(function(location) {
                    self.selectedZipCode = location;
                });
            },

            ngOnDestroy: function() {
               this.locationSubscription.unsubscribe();
            },

            setLocation: function() {
               this.weatherService.setCurrentLocation(this.selectedZipCode);
               this.mdDialogRef.close(this.selectedZipCode);
            }
        });
})(window.app || (window.app = {}));
