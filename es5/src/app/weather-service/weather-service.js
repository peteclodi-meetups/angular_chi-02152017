(function(app) {
    app.WeatherService =
        ng.core.Class({
            constructor: [ng.http.Http, function WeatherService(http) {
                this.http = http;
                this.locationSubject = new Rx.BehaviorSubject('');
                this.weatherSubject = new Rx.BehaviorSubject({});
            }],

            setCurrentLocation: function (newZipCode) {
                this.zipCode = newZipCode;
                this.locationSubject.next(this.zipCode);
                return this.http.get(`https://api.apixu.com/v1/forecast.json?key=417acf4b97c0495881581355170402&q=${this.zipCode}&days=5`).toPromise()
                    .then(res => {
                        let weather = res.json();
                        this.weatherSubject.next(weather);
                    }).catch(error => {
                        this.weatherSubject.next({});
                        return {};
                    });
            }
        });
})(window.app || (window.app = {}));
