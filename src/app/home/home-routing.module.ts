import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { IngresousuarioComponent } from '../ingresousuario/ingresousuario.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  { path: 'accesousuario', component: IngresousuarioComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {
  
}
