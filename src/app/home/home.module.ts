import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MatSliderModule } from '@angular/material/slider';
import { HomePageRoutingModule } from './home-routing.module';
import { IngresousuarioComponent } from '../ingresousuario/ingresousuario.component';
import { IngresodocenteComponent } from '../ingresodocente/ingresodocente.component';
import { ReestablecercontrasennaComponent } from '../reestablecercontrasenna/reestablecercontrasenna.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatSliderModule
  ],
  declarations: [HomePage, IngresousuarioComponent, IngresodocenteComponent, ReestablecercontrasennaComponent]
})
export class HomePageModule {}
