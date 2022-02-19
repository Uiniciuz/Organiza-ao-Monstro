import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Metodo04PageRoutingModule } from './metodo04-routing.module';

import { Metodo04Page } from './metodo04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Metodo04PageRoutingModule
  ],
  declarations: [Metodo04Page]
})
export class Metodo04PageModule {}
