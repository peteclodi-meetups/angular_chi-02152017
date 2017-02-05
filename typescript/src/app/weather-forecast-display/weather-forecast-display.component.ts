import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'weather-forecast-display',
  templateUrl: './weather-forecast-display.component.html',
  styleUrls: ['./weather-forecast-display.component.scss'],
})
export class WeatherForecastDisplayComponent implements OnInit {

  @Input() forecast;

  constructor() { }

  ngOnInit() {
  }

}
