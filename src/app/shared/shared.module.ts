import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MainTableComponent } from './main-table/main-table.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    BreadcrumbComponent,
    MainTableComponent,
    MapComponent
  ],
  entryComponents: [
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    BreadcrumbComponent,
    MainTableComponent,
    MapComponent  
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_4fGgVPHK8IyhzbVZihXQxUrTa7NaYqI'
    }),
    AgmDirectionModule
  ]
})

export class SharedModule { }
