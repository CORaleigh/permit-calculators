import { Component, OnInit, Inject } from '@angular/core';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-openspace-dialog',
  templateUrl: './openspace-dialog.component.html',
  styleUrls: ['./openspace-dialog.component.css']
})
export class OpenspaceDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OpenspaceDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit() {
  }

}
