(function(app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [
                ng.platformBrowser.BrowserModule,
                ng.forms.FormsModule,
                ng.http.HttpModule,
                ng.material.MaterialModule.forRoot()
            ],
            providers: [
                app.WeatherService
            ],
            entryComponents: [
                app.PickLocationDialogComponent,
            ],
            declarations: [
                app.AppComponent,
                app.MenuBarComponent,
                app.PickLocationDialogComponent,
                app.WeatherDisplayComponent,
                app.WeatherForecastDisplayComponent
            ],
            bootstrap: [ app.AppComponent ]
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
