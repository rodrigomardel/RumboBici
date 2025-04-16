package com.rumbobici.api.dto;

public class CategoriaDto {
    private Long idCategoria;
    private String nombreCategoria;
    private String urlImagen;

    public CategoriaDto(Long idCategoria, String nombreCategoria, String urlImagen) {
        this.idCategoria = idCategoria;
        this.nombreCategoria = nombreCategoria;
        this.urlImagen = urlImagen;
    }

    public Long getIdCategoria() {
        return idCategoria;
    }

    public String getNombreCategoria() {
        return nombreCategoria;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setIdCategoria(Long idCategoria) {
        this.idCategoria = idCategoria;
    }

    public void setNombreCategoria(String nombreCategoria) {
        this.nombreCategoria = nombreCategoria;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

}
