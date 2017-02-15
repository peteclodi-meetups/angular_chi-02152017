(function(app) {
    app.WeatherService =
        ng.core.Class({
            constructor: [ng.http.Http, Rx.BehaviorSubject, function WeatherService(http, BehaviorSubject) {
                this.http = http;
                this.locationSubject = new BehaviorSubject('');
                this.weatherSubject = new BehaviorSubject({});
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
