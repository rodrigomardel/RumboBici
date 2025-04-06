import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  mostrarHomeButton: boolean = false;
  mostrarPerfilButton: boolean = false;
  mostrarLoginButton: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribirse a los cambios en la ruta
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const route = event.urlAfterRedirects;

        // Mostrar/ocultar elementos según la ruta actual
        this.mostrarHomeButton = route === '/home';
        this.mostrarLoginButton = route === '/home';

        this.mostrarPerfilButton = route === '/perfil';
      });
  }
}
