import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Metodo08PageRoutingModule } from './metodo08-routing.module';

import { Metodo08Page } from './metodo08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Metodo08PageRoutingModule
  ],
  declarations: [Metodo08Page]
})
export class Metodo08PageModule {}
