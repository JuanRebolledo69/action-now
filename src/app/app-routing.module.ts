import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  
  {
    path: 'cal-imc',
    loadChildren: () => import('./pages/cal-imc/cal-imc.module').then( m => m.CalImcPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'contador-calorias',
    loadChildren: () => import('./pages/contador-calorias/contador-calorias.module').then( m => m.ContadorCaloriasPageModule)
  },
  {
    path: 'recomendacion-rutina',
    loadChildren: () => import('./pages/recomendacion-rutina/recomendacion-rutina.module').then( m => m.RecomendacionRutinaPageModule)
  },
  {
    path: 'rutinas',
    loadChildren: () => import('./pages/rutinas/rutinas.module').then( m => m.RutinasPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
