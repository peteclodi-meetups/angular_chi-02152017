(function(app) {
    app.MenuBarComponent =
        ng.core.Component({
            selector: 'menu-bar',
            templateUrl: 'app/menu-bar/menu-bar-component.html',
            styleUrls: ['app/menu-bar/menu-bar-component.css'],
            entryComponents: [app.PickLocationDialogComponent],
            viewProviders: [ng.material.MdDialog]
        })
        .Class({
            constructor: [ng.material.MdDialog, function(mdDialog) {
                this.mdDialog = mdDialog;
            }],

            pickLocation: function() {
                // Perform this assignment because MdDialogRef cannot be injected into
                // app.PickLocationDialogComponent in ES 5
                var dialogRef = this.mdDialog.open(app.PickLocationDialogComponent);
                dialogRef.componentInstance.mdDialogRef = dialogRef;
            }
        });
})(window.app || (window.app = {}));
