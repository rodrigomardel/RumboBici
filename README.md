<div align="center">
  <a href="https://rumbobici-7807d.web.app/home">
    <img src="doc/img/logo2color-rumbobici-300x150.png" alt="RumboBici">
  </a>

[![Angular 19](https://img.shields.io/badge/Angular_19-DD0031?style=for-the-badge&logo=angular&logoColor=white&labelColor=333333)](https://angular.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white&labelColor=333333)](https://getbootstrap.com/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white&labelColor=333333)](https://sass-lang.com/)
[![Spring Boot 3.4.4](https://img.shields.io/badge/Spring_Boot_3.4.4-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white&labelColor=333333)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white&labelColor=333333)](https://www.mysql.com/)

</br></br>

##  🚴‍♂️  Descripción
</div>
Aplicación web cuyo propósito es registrar y gestionar actividades realizadas en bicicleta. Facilita un seguimiento eficiente del historial de rutas, permitiendo almacenar, categorizar, consultar, editar y eliminar la información relacionada con cada actividad.

Buscando promover estilos de vida saludables, sostenibles y conectar con el entorno, el uso de la bicicleta ha cobrado una relevancia especial, no solo como medio de transporte, sino también como una herramienta de descubrimiento personal y social. 
La aplicación nace con el objetivo de apoyar y potenciar este estilo de vida, ofreciendo a los usuarios una plataforma digital donde puedan registrar y organizar sus rutas. 

</br></br>

<div align="center">

## 📁 Estructura del proyecto
</div>

```bash
📁 root/
|-- back/                             # Frontend resources
|   |-- api/                          # API Rest
|   |   |-- controllers               # Endpoints
|   |   |-- dto                       # Encapsulamiento
|   |   |-- models                    # Entidades
|   |   |-- repositories              # Acceso a datos
|   |   \-- servicio                  # Service
|
|-- front/                            # Frontend resources
|   |-- public                        # Imágenes y fuentes
|   |-- app/                          # Components frontend code
|   |   |-- core/                     # Core components
|   |   |   |-- constants             # URLs
|   |   |   |-- home                  # Index APP 
|   |   |   |-- login                 # Login de usuario 
|   |   |   |-- modal-confirmacion    # Modal confirmación
|   |   |   |-- models                # Entidades
|   |   |   |-- perfil                # Perfil de usuario
|   |   |   |-- servicios             # Service
|   |   |-- shared/                   # Shared components
|   |   |   |-- categorias            # Categorías disponibles
|   |   |       |-- categorias-rutas  # Rutas de cada categoría
|   |   |   |-- ruta                  # Rutas de usuario
|   |   |       |-- modal-ruta        # Modal creación ruta
|   |   |   |-- usuarios              # Usuarios registrados 
|   |   |       |-- ruta-usuario      # Rutas de cada usuario
|   |   |-- app-routing               # Enrutamientos
|   |   |-- app-component             # Plantilla Global
|   |   |-- app-module                # Importaciones
|   \-- styles                        # Global SCSS
|
|-- db/                               # Database schema
|
\-- doc/                              # Documentación del proyecto
```
</br></br>

<div align="center">

## 🛠️ Tecnologías y herramientas
</div>

### 🎨 Identidad visual
- Inkscape
- GIMP

### 💻 Frontend
- Bootstrap 5
- Angular v19
  - HTML5
  - SCSS
  - TypeScript

### ⚙ Backend
- Spring Boot v3.4.4
  - Java v21.0.6
  - Spring Web
  - Spring Data JPA
  - MySQL Driver

### 🗄️ Base de datos
- MySQL

### 🚀 Despliegue

#### Backend – Railway
- Docker
- GitHub 

#### Frontend – Firebase
- Firebase CLI

</br></br>

<div align="center">

## 🖼️ Vista previa del proyecto
</div>

A continuación se muestran algunas capturas clave del funcionamiento de la aplicación para ilustrar su estructura y funcionalidades.

### 👤 Perfil de usuario
- Información principal del usuario.
- Menú lateral desplegable con los distintos apartados: rutas, categorías y todos los usuarios registrados en la aplicación.

> 📷 Ilustración 1.1: Captura del perfil de usuario  
![Captura perfil de usuario](doc/img/screen-perfil-git.png)

---

### 🗺️ Gestión de rutas
- Listado de todas las rutas.
- Creación de nuevas rutas.
- Edición y eliminación de rutas existentes.

> 📷 Ilustración 2.1: Captura del apartado de rutas (listado y edición)  
![Captura rutas](doc/img/screen-rutas.png)

> 📷 Ilustración 2.2: Captura del apartado de rutas (modal creación)
![Captura rutas](doc/img/screen-rutas-nueva-ruta.png)

> 📷 Ilustración 2.3: Captura del apartado de rutas (ejemplo modal confirmación)
![Captura rutas](doc/img/screen-ejemplo-modal-confirmacion.png)


---

### 🗂️ Visualización por categorías

> 📷 Ilustración 3.1: Captura de las categorías  
![Captura categorías](doc/img/screen-categorias-git.png)

> 📷 Ilustración 3.2: Captura de rutas por categoría  
![Captura rutas por categoría](doc/img/screen-rutas-categoria-git.png)

---

### 👥 Usuarios
- Listado de todos los usuarios registrados.
- Posibilidad de visualizar las rutas asociadas a cada uno.

> 📷 Ilustración 4.1: Captura de usuarios registrados  
![Captura usuarios](doc/img/screen-usuarios-regitrados-git.png)

> 📷 Ilustración 4.2: Captura de rutas del usuario seleccionado  
![Captura rutas del usuario](doc/img/screen-rutas-usuarios-regitrados-git.png)
