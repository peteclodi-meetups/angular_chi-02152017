import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Http} from '@angular/http';

@Injectable()
export class WeatherService {
    constructor(http: Http) {
        this.http = http;
        this.locationSubject = new BehaviorSubject('');
        this.weatherSubject = new BehaviorSubject({});
    }

    setCurrentLocation(newZipCode) {
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
}
