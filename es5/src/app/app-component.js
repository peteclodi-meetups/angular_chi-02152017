(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'app-root',
            templateUrl: 'app/app-component.html',
            styleUrls: ['app/app-component.css'],
            entryComponents: [app.MenuBarComponent, app.WeatherDisplayComponent]
        })
        .Class({
            constructor: function() {
            }
        });
})(window.app || (window.app = {}));
