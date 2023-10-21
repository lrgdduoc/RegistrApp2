import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreacionqrPageRoutingModule } from './creacionqr-routing.module';

import { CreacionqrPage } from './creacionqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreacionqrPageRoutingModule
  ],
  declarations: [CreacionqrPage]
})
export class CreacionqrPageModule {}
