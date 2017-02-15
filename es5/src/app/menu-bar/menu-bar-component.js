(function(app) {
    app.MenuBarComponent =
        ng.core.Component({
            selector: 'menu-bar',
            templateUrl: './menu-bar-component.html',
            styleUrls: ['./menu-bar-component.css'],
            entryComponents: [app.PickLocationDialogComponent],
            viewProviders: [ng.material.MdDialog]
        })
        .Class({
            constructor: [ng.material.MdDialog, function(mdDialog) {
                this.mdDialog = mdDialog;
            }],

            pickLocation: function() {
               this.mdDialog.open(app.PickLocationDialogComponent);
            }
        });
})(window.app || (window.app = {}));
