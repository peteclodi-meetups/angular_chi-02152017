import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { PickLocationDialogComponent } from '../pick-location-dialog/pick-location-dialog.component';

@Component({
   selector: 'menu-bar',
   template: require('./menu-bar.component.html'),
   styles: [require('./menu-bar.component.scss')]
})

export class MenuBarComponent {
    constructor(mdDialog: MdDialog) {
        this.mdDialog = mdDialog;
    }

    pickLocation() {
        this.mdDialog.open(PickLocationDialogComponent);
    }
}
