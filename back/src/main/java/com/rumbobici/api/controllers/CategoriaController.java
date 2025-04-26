package com.rumbobici.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rumbobici.api.dto.CategoriaDto;
import com.rumbobici.api.models.CategoriaModel;
import com.rumbobici.api.services.CategoriaService;

/**
 * Gestiona la obtencion de los datos de las categorias.
 */
@RestController
@RequestMapping("/ruta")
@CrossOrigin(origins = "*")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    /**
     * Obtiene los datos de las categorías disponibles.
     * 
     * @param nombreCategoria Nombre de la categoría correspondiente para obtener la información.
     * @return DTO con los datos de la categoría (idCategoria, nombreCategoria y UrlImagen)
     * @throws Exception Mensaje correspondiente si ocurre un error al obtener los datos.
     */
    @GetMapping("/categoria")
    public CategoriaDto obtenerCategoria(@RequestParam String nombreCategoria) throws Exception {
        CategoriaModel categoria = categoriaService
                .obtenerDatosCategoria(nombreCategoria)
                .orElseThrow(() -> new RuntimeException("Categoría no encontrada"));

        return new CategoriaDto(
                categoria.getIdCategoria(),
                categoria.getNombreCategoria(),
                categoria.getUrlImagen());
    }

    /**
     * Obtiene todas las categorías registradas en el sistema.
     * 
     * @return Lista con todas las categorías registradas.
     */
    @GetMapping("/categorias")
    public List<CategoriaModel> obtenerTodosLosUsuarios() {
        return categoriaService.obtenerTodasLasCategorias();
    }

}
