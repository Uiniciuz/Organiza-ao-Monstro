import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Metodo06PageRoutingModule } from './metodo06-routing.module';

import { Metodo06Page } from './metodo06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Metodo06PageRoutingModule
  ],
  declarations: [Metodo06Page]
})
export class Metodo06PageModule {}
