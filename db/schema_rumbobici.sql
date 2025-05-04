-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS rumbobici;
USE rumbobici;

-- Tabla: usuarios
CREATE TABLE usuario (
    id_usuario BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL UNIQUE,
    fecha_nacimiento DATE NOT NULL
);

-- Tabla: categorias
CREATE TABLE categoria_ruta (
    id_categoria BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria VARCHAR(100) NOT NULL,
    url_imagen VARCHAR(255)
);

-- Tabla: rutas
CREATE TABLE ruta (
    id_ruta BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre_ruta VARCHAR(100) NOT NULL,
    localidad_ruta VARCHAR(100) NOT NULL,
    kilometros_ruta INT NOT NULL,
    fecha_ruta DATE NOT NULL,
    id_categoria BIGINT NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categoria_ruta(id_categoria)
);

-- Tabla: usuarios_rutas (Tabla intermedia)
CREATE TABLE usuario_ruta (
    id_usuario BIGINT NOT NULL,
    id_ruta BIGINT NOT NULL,
    fecha_realizacion DATE NOT NULL,
    PRIMARY KEY (id_usuario, id_ruta),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_ruta) REFERENCES ruta(id_ruta) ON DELETE CASCADE
);