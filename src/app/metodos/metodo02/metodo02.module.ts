import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Metodo02PageRoutingModule } from './metodo02-routing.module';

import { Metodo02Page } from './metodo02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Metodo02PageRoutingModule
  ],
  declarations: [Metodo02Page]
})
export class Metodo02PageModule {}
