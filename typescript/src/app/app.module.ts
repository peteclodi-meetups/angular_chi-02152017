import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PickLocationDialogComponent } from './pick-location-dialog/pick-location-dialog.component';
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {WeatherService} from './weather.service/weather.service';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { WeatherForecastDisplayComponent } from './weather-forecast-display/weather-forecast-display.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PickLocationDialogComponent,
    WeatherDisplayComponent,
    WeatherForecastDisplayComponent
  ],
  entryComponents: [
    PickLocationDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
