import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SharedModule } from './../shared/shared.module';
import { PagesComponent } from './pages.component';
import { BusLinesComponent } from './bus-lines/bus-lines.component';

@NgModule({
  declarations: [
    PagesComponent, 
    BusLinesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ]
})
export class PagesModule { }
