import {Component, OnInit, OnDestroy} from '@angular/core';
import {WeatherService} from '../weather.service/weather.service';
import {Subscription} from 'rxjs';
import {MdDialog} from '@angular/material';
import {PickLocationDialogComponent} from '../pick-location-dialog/pick-location-dialog.component';

@Component({
  selector: 'weather-display',
  template: require('./weather-display.component.html'),
  styles: [require('./weather-display.component.scss')]
})
export class WeatherDisplayComponent implements OnInit, OnDestroy {
    constructor(mdDialog: MdDialog, weatherService: WeatherService) {
        this.mdDialog = mdDialog;
        this.weatherService = weatherService;
    }

    ngOnInit() {
        this.locationSubscription = this.weatherService.locationSubject.subscribe(zipCode => {
            this.currentZipCode = zipCode;
            this.weatherSubscription = this.weatherService.weatherSubject.subscribe(weather => {
                this.weather = weather;
            });
        });
    }

    ngOnDestroy() {
        if(this.locationSubscription) {
            this.locationSubscription.unsubscribe();
        }
        if(this.weatherSubscription) {
            this.weatherSubscription.unsubscribe();
        }
    }

    pickLocation() {
        this.mdDialog.open(PickLocationDialogComponent);
    }
}

WeatherDisplayComponent.$inject = ['MdDialog', 'WeatherService'];
