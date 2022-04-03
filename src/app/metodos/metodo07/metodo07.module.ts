import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Metodo07PageRoutingModule } from './metodo07-routing.module';

import { Metodo07Page } from './metodo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Metodo07PageRoutingModule
  ],
  declarations: [Metodo07Page]
})
export class Metodo07PageModule {}
