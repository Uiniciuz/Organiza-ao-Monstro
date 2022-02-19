import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Metodo01Page } from './metodo01.page';

const routes: Routes = [
  {
    path: '',
    component: Metodo01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Metodo01PageRoutingModule {}
