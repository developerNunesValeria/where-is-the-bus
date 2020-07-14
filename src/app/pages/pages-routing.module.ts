import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BusLinesComponent } from './bus-lines/bus-lines.component';


const routes: Route[] = [
  {
    path: '', redirectTo: 'linhas', pathMatch: 'full'
  },
  {
    path: 'linhas', component: BusLinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
