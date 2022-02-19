import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Metodo02Page } from './metodo02.page';

const routes: Routes = [
  {
    path: '',
    component: Metodo02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Metodo02PageRoutingModule {}
