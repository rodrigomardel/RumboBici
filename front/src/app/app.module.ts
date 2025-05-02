import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterLink, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PerfilComponent } from './core/perfil/perfil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { UsuariosComponent } from './shared/usuarios/usuarios.component';
import { RutasComponent } from './shared/rutas/rutas.component';
import { AuthUserLoginService } from './core/services/auth-user-login.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { CategoriasComponent } from './shared/categorias/categorias.component';
import { CategoriasRutasComponent } from './shared/categorias/categorias-rutas/categorias-rutas.component';
import { ModalRutaComponent } from './shared/rutas/modal-ruta/modal-ruta.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ModalConfirmacionComponent } from './core/modal-confirmacion/modal-confirmacion.component';
import { RutaUsuarioComponent } from './shared/usuarios/ruta-usuario/ruta-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilComponent,
    LoginComponent,
    PerfilComponent,
    UsuariosComponent,
    RutasComponent,
    CategoriasComponent,
    CategoriasRutasComponent,
    ModalRutaComponent,
    ModalConfirmacionComponent,
    RutaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    RouterLink,
    RouterOutlet,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [
    AuthUserLoginService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
