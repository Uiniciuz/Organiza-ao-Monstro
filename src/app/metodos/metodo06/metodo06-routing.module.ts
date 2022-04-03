import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Metodo06Page } from './metodo06.page';

const routes: Routes = [
  {
    path: '',
    component: Metodo06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Metodo06PageRoutingModule {}
