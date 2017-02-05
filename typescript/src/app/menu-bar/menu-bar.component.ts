import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {PickLocationDialogComponent} from '../pick-location-dialog/pick-location-dialog.component';

@Component({
    selector: 'menu-bar',
    templateUrl: 'menu-bar.component.html',
    styleUrls: ['menu-bar.component.scss']
})

export class MenuBarComponent implements OnInit {
  constructor(public mdDialog: MdDialog) { }

  ngOnInit() {
  }

  pickLocation() {
    this.mdDialog.open(PickLocationDialogComponent);
  }
}
