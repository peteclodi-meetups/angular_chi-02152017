import {Component, OnInit, OnDestroy} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {WeatherService} from '../weather-service/weather.service';

@Component({
  selector: 'pick-location-dialog',
  template: require('./pick-location-dialog.component.html'),
  styles: [require('./pick-location-dialog.component.scss')]
})
export class PickLocationDialogComponent implements OnInit, OnDestroy {
    constructor(mdDialogRef: MdDialogRef, weatherService: WeatherService) {
        this.mdDialogRef = mdDialogRef;
        this.weatherService = weatherService;
    }

    ngOnInit() {
        this.locationSubscription = this.weatherService.locationSubject.subscribe(location => {
            this.selectedZipCode = location;
        });
    }

    ngOnDestroy() {
        this.locationSubscription.unsubscribe();
    }

    setLocation() {
        this.weatherService.setCurrentLocation(this.selectedZipCode);
        this.mdDialogRef.close(this.selectedZipCode);
    }
}
