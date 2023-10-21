import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { IngresousuarioComponent } from '../app/ingresousuario/ingresousuario.component';
import { IngresodocenteComponent } from '../app/ingresodocente/ingresodocente.component';
import { ReestablecercontrasennaComponent } from '../app/reestablecercontrasenna/reestablecercontrasenna.component';
import { AlumnosbdComponent } from '../app/alumnosbd/alumnosbd.component';

import { AuthGuard } from '../app/guard/auth.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'accesodocente',
    loadChildren: () => import('./accesodocente/accesodocente.module').then( m => m.AccesodocentePageModule)
  },
  {
    path: 'accesoestudiantes',
    loadChildren: () => import('./accesoestudiantes/accesoestudiantes.module').then( m => m.AccesoestudiantesPageModule)
  },
  {
    path: 'recuperarcontrasena',
    loadChildren: () => import('./recuperarcontrasena/recuperarcontrasena.module').then( m => m.RecuperarcontrasenaPageModule)
  },
  { path: 'accesousuario', component: IngresousuarioComponent, canActivate: [AuthGuard] },
  { path: 'accesodocente1', component: IngresodocenteComponent ,canActivate: [AuthGuard]},
  { path: 'reestablecer-contrasenna', component: ReestablecercontrasennaComponent,  },
  {
    path: 'paginaparabd',
    loadChildren: () => import('./paginaparabd/paginaparabd.module').then( m => m.PaginaparabdPageModule)
  },
  { path: 'alumnosbd', component: AlumnosbdComponent, },
  {
    path: 'creacionqr',
    loadChildren: () => import('./creacionqr/creacionqr.module').then( m => m.CreacionqrPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found' // Redirigir a la página de error 404 para rutas no encontradas
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
