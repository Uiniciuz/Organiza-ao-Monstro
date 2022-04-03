import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Metodo05Page } from './metodo05.page';

const routes: Routes = [
  {
    path: '',
    component: Metodo05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Metodo05PageRoutingModule {}
