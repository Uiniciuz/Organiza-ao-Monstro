import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Metodo01PageRoutingModule } from './metodo01-routing.module';

import { Metodo01Page } from './metodo01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Metodo01PageRoutingModule
  ],
  declarations: [Metodo01Page]
})
export class Metodo01PageModule {}
