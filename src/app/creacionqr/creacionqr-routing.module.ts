import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreacionqrPage } from './creacionqr.page';

const routes: Routes = [
  {
    path: '',
    component: CreacionqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreacionqrPageRoutingModule {}
