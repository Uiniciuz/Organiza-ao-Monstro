import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Metodo04Page } from './metodo04.page';

const routes: Routes = [
  {
    path: '',
    component: Metodo04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Metodo04PageRoutingModule {}
