// package com.rumbobici.api.models;

// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;
// import lombok.AllArgsConstructor;
// import lombok.Builder;
// import lombok.Data;
// import lombok.NoArgsConstructor;

// @Entity
// // Construcción con la anotación «.» sin necesidad de getters y setters
// @Builder
// @Data
// @NoArgsConstructor
// @AllArgsConstructor
// @Table(name = "categoria_ruta")
// public class CategoriaRutaModel {

//     @Id
//     //Valor generado automáticamente por la base de datos (AUTO_INCREMENT)
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     @Column(name = "id_categoria")
//     private Integer idCategoria;

//     @Column(name = "nombre_categoria", nullable = false, length = 100)
//     private String nombreCategoria;
    
// }
