import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaparabdPageRoutingModule } from './paginaparabd-routing.module';

import { PaginaparabdPage } from './paginaparabd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaparabdPageRoutingModule
  ],
  declarations: [PaginaparabdPage]
})
export class PaginaparabdPageModule {}
