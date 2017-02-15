(function(app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [
                ng.platformBrowser.BrowserModule,
                ng.forms.FormsModule,
                ng.http.HttpModule,
                ng.material.MaterialModule.forRoot()
            ],
            // providers: [
            //     ng.http.Http,
            //     ng.material.MdDialog,
            //     app.WeatherService
            // ],
            exports: [
                app.PickLocationDialogComponent,
            ],
            entryComponents: [
                app.AppComponent,
                app.MenuBarComponent,
                app.PickLocationDialogComponent,
                app.WeatherDisplayComponent,
                app.WeatherForecastDisplayComponent
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
