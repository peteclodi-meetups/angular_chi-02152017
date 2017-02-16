(function(app) {
    app.WeatherService =
        ng.core.Class({
            constructor: [ng.http.Http, function WeatherService(http) {
                this.http = http;
                this.locationSubject = new Rx.BehaviorSubject('');
                this.weatherSubject = new Rx.BehaviorSubject({});
            }],

            setCurrentLocation: function (newZipCode) {
                var self = this;
                this.zipCode = newZipCode;
                this.locationSubject.next(this.zipCode);
                return this.http.get(`https://api.apixu.com/v1/forecast.json?key=417acf4b97c0495881581355170402&q=${this.zipCode}&days=5`).toPromise()
                    .then(function(res) {
                        var weather = res.json();
                        self.weatherSubject.next(weather);
                    }).catch(function(error) {
                        self.weatherSubject.next({});
                        return {};
                    });
            }
        });
})(window.app || (window.app = {}));
