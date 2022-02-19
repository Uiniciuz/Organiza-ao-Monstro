import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Metodos03PageRoutingModule } from './metodos03-routing.module';

import { Metodos03Page } from './metodos03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Metodos03PageRoutingModule
  ],
  declarations: [Metodos03Page]
})
export class Metodos03PageModule {}
