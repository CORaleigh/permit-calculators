import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatSelectModule, MatDialogModule, MatCardModule, MatListModule, MatToolbarModule, MatIcon, MatIconModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AppRoutingModule }        from './app-routing.module';


import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CalculatorOutputComponent } from './calculator-output/calculator-output.component';
import { DevelopmentEntryComponent } from './development-entry/development-entry.component';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import { SplashDialogComponent } from './splash-dialog/splash-dialog.component';
import { ConstructionTypePipe } from './construction-type.pipe';
import { BuildingTypePipe } from './building-type.pipe';
import { MainComponent } from './main/main.component';
import { BuildingPermitsComponent } from './building-permits/building-permits.component';
import { StormwaterPermitsComponent } from './stormwater-permits/stormwater-permits.component';
import { OpenspacePermitsComponent } from './openspace-permits/openspace-permits.component';
import { ThoroughfarePermitsComponent } from './thoroughfare-permits/thoroughfare-permits.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorOutputComponent,
    DevelopmentEntryComponent,
    HelpDialogComponent,
    SplashDialogComponent,
    ConstructionTypePipe,
    BuildingTypePipe,
    MainComponent,
    BuildingPermitsComponent,
    StormwaterPermitsComponent,
    OpenspacePermitsComponent,
    ThoroughfarePermitsComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    MatButtonModule, 
    MatSelectModule,
     MatDialogModule,
     MatCardModule,
     MatListModule,
     MatToolbarModule,
     MatIconModule,
     MatInputModule,
     BrowserAnimationsModule,
     FlexLayoutModule,
     AppRoutingModule   
  ],
  entryComponents: [SplashDialogComponent, HelpDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
