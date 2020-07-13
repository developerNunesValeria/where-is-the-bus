import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Route[] = [
  {
    path: '',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full',  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
