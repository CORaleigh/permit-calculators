import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
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
import { LandusePipe } from './landuse.pipe';
import { SharedService } from './shared.service';
import { StormwaterService } from './stormwater.service';
import { OpenspaceService } from './openspace.service';
import { ThoroughfareService } from './thoroughfare.service';
import { CalculationService } from './calculation.service';
import { BuildingService } from './building.service';
import { ThoroughfarePipe } from './thoroughfare.pipe';
import { StormwaterMapComponent } from './stormwater-map/stormwater-map.component';
import { OpenspaceDialogComponent } from './openspace-dialog/openspace-dialog.component';
import { SummaryComponent } from './summary/summary.component';
import { TilesComponent } from './tiles/tiles.component';
import { RightofwayPermitsComponent } from './rightofway-permits/rightofway-permits.component';
import { RightofwayMapComponent } from './rightofway-map/rightofway-map.component';
import { RightofwayPipe } from './rightofway.pipe';
import { RightofwayDialogComponent } from './rightofway-dialog/rightofway-dialog.component';
import { PublicutilityPermitsComponent } from './publicutility-permits/publicutility-permits.component';


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
    ThoroughfarePermitsComponent,
    LandusePipe,
    ThoroughfarePipe,
    StormwaterMapComponent,
    OpenspaceDialogComponent,
    SummaryComponent,
    TilesComponent,
    RightofwayPermitsComponent,
    RightofwayMapComponent,
    RightofwayPipe,
    RightofwayDialogComponent,
    PublicutilityPermitsComponent
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
     AppRoutingModule,
     MatTabsModule,
     MatCheckboxModule,MatGridListModule, MatSnackBarModule
  ],
  entryComponents: [SplashDialogComponent, HelpDialogComponent, StormwaterMapComponent, OpenspaceDialogComponent, RightofwayDialogComponent],
  providers: [SharedService, StormwaterService, OpenspaceService, ThoroughfareService, BuildingService, CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
