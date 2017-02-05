import {Component, OnInit, OnDestroy} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Subscription} from 'rxjs';
import {WeatherService} from '../weather.service/weather.service';

@Component({
  selector: 'pick-location-dialog',
  templateUrl: './pick-location-dialog.component.html',
  styleUrls: ['./pick-location-dialog.component.scss']
})
export class PickLocationDialogComponent implements OnInit, OnDestroy {

  private selectedZipCode: string;
  private locationSubscription: Subscription;

  constructor(private mdDialogRef: MdDialogRef<PickLocationDialogComponent>, private weatherService: WeatherService) { }

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
