import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormSubscribeComponent } from './pages/form-subscribe/form-subscribe.component';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { RutasCategoryComponent } from './pages/rutas-category/rutas-category.component';
import { RutasDetailComponent } from './pages/rutas-detail/rutas-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form-subscribe', component: FormSubscribeComponent },
  { path: 'form-login', component: FormLoginComponent },
  { path: 'rutas-category', component: RutasCategoryComponent },
  { path: 'rutas-category*:id', component: RutasComponent },
  { path: 'rutas', component: RutasComponent },
  { path: 'rutas*:id', component: RutasDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
