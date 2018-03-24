import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildingPermitsComponent }  from './building-permits/building-permits.component';
import { StormwaterPermitsComponent } from './stormwater-permits/stormwater-permits.component';
import { OpenspacePermitsComponent } from './openspace-permits/openspace-permits.component';
import { ThoroughfarePermitsComponent } from './thoroughfare-permits/thoroughfare-permits.component';
import { MainComponent }    from './main/main.component';


const appRoutes: Routes = [
{
    path:'home',
    component:MainComponent
},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'building',
    component: BuildingPermitsComponent
  },
  {
    path: 'stormwater',
    component: StormwaterPermitsComponent
  }
  ,
  {
    path: 'openspace',
    component: OpenspacePermitsComponent
  },
  {
    path: 'thoroughfare',
    component: ThoroughfarePermitsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/