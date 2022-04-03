import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Metodo05PageRoutingModule } from './metodo05-routing.module';

import { Metodo05Page } from './metodo05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Metodo05PageRoutingModule
  ],
  declarations: [Metodo05Page]
})
export class Metodo05PageModule {}
