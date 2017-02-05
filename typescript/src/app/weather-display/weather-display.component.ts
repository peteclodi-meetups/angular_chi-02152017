import {Component, OnInit, OnDestroy} from '@angular/core';
import {WeatherService} from '../weather.service/weather.service';
import {Subscription} from 'rxjs';
import {MdDialog} from '@angular/material';
import {PickLocationDialogComponent} from '../pick-location-dialog/pick-location-dialog.component';

@Component({
  selector: 'weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit, OnDestroy {

  private currentZipCode: string;
  private weather;

  private locationSubscription: Subscription;
  private weatherSubscription: Subscription;

  constructor(public mdDialog: MdDialog, private weatherService: WeatherService) { }

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
