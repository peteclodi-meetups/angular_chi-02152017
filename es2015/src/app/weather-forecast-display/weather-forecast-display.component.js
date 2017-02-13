import {Component, Input} from '@angular/core';

@Component({
  selector: 'weather-forecast-display',
  template: require('./weather-forecast-display.component.html'),
  styles: [require('./weather-forecast-display.component.scss')],
})
export class WeatherForecastDisplayComponent {

  @Input() forecast;

  constructor() { }
}
