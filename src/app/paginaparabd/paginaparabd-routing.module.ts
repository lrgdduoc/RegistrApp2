import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseService } from '../services/database.service';

import { PaginaparabdPage } from './paginaparabd.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaparabdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaparabdPageRoutingModule {}
