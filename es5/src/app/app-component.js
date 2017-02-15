(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'app-root',
            templateUrl: './app-component.html',
            styleUrls: ['./app-component.css'],
            // ES5
            entryComponents: [app.MenuBarComponent, app.WeatherDisplayComponent]
        })
        .Class({
            constructor: function() {
            }
        });
})(window.app || (window.app = {}));
