import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Metodo08Page } from './metodo08.page';

const routes: Routes = [
  {
    path: '',
    component: Metodo08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Metodo08PageRoutingModule {}
