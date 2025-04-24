import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { PerfilComponent } from './core/perfil/perfil.component';
import { UsuariosComponent } from './shared/usuarios/usuarios.component';
import { RutasComponent } from './shared/rutas/rutas.component';
import { LoginComponent } from './core/login/login.component';
import { CategoriasComponent } from './shared/categorias/categorias.component';
import { CategoriasRutasComponent } from './shared/categorias/categorias-rutas/categorias-rutas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'rutas', component: RutasComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'categorias/rutas/:idCategoria', component: CategoriasRutasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
