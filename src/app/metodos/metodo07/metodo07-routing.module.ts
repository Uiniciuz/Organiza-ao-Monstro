import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Metodo07Page } from './metodo07.page';

const routes: Routes = [
  {
    path: '',
    component: Metodo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Metodo07PageRoutingModule {}
