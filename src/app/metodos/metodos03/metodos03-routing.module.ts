import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Metodos03Page } from './metodos03.page';

const routes: Routes = [
  {
    path: '',
    component: Metodos03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Metodos03PageRoutingModule {}
