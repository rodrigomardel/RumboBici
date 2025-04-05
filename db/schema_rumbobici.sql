-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS rumbobici;
USE rumbobici;

-- Tabla: usuarios
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL UNIQUE,
    fecha_nacimiento DATE NOT NULL
);

-- Tabla: categorias
CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Tabla: rutas
CREATE TABLE rutas (
    id_ruta INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    localidad VARCHAR(100) NOT NULL,
    kilometros INT NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    plazas INT NOT NULL DEFAULT 0,
    precio DECIMAL(6, 2) NOT NULL DEFAULT 0,
    id_categoria INT NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

-- Tabla: usuarios_rutas (Tabla intermedia)
CREATE TABLE usuarios_rutas (
    id_usuario INT NOT NULL,
    id_ruta INT NOT NULL,
    fecha_realizacion DATE NOT NULL,
    PRIMARY KEY (id_usuario, id_ruta),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_ruta) REFERENCES rutas(id_ruta)
);