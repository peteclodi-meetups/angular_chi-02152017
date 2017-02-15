(function(app) {
    app.PickLocationDialogComponent =
        ng.core.Component({
            selector: 'pick-location-dialog',
            templateUrl: './pick-location-dialog-component.html',
            styleUrls: ['./pick-location-dialog-component.css'],
            viewProviders: [ng.material.MdDialogRef, app.WeatherService]
        })
        .Class({
            constructor: [ng.material.MdDialogRef, app.WeatherService, function(mdDialogRef, weatherService) {
                this.mdDialogRef = mdDialogRef;
                this.weatherService = weatherService;
            }],

            ngOnInit: function() {
                this.locationSubscription = this.weatherService.locationSubject.subscribe(location => {
                    this.selectedZipCode = location;
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
