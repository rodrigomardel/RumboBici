import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { AdminPerfilComponent } from './core/admin-perfil/admin-perfil.component';
import { HeaderComponent } from './shared/header/header.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin-perfil', component: AdminPerfilComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
