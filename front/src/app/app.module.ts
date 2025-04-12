import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterLink, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PerfilComponent,
    LoginComponent,
    PerfilComponent,
    UsuariosComponent,
    RutasComponent,
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
    MatInputModule
  ],
  providers: [
    AuthUserLoginService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
