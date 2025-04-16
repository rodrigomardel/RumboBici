package com.rumbobici.api.services;

import com.rumbobici.api.models.CategoriaModel;
import com.rumbobici.api.repositories.CategoriaRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Servicio encargado de la lógica y el acceso a los datos de las categorias en
 * la BBDD.
 */
@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    /**
     * Obtiene los datos de una categoria por su nombre.
     *
     * @param nombreCategoria Nombre de categoria a buscar.
     * @return Un {@link Optional} que contiene la categoria si fue encontrada, o
     *         vacío en caso contrario.
     * @throws Exception Si ocurre algún error durante la consulta.
     */
    public Optional<CategoriaModel> obtenerDatosCategoria(String nombreCategoria) throws Exception {
        return categoriaRepository.findByNombreCategoria(nombreCategoria);
    }

    /**
     * Método para recuperar todas las categorias de la base de datos.
     * 
     * @return Lista de usuarios disponibles.
     */
    public List<CategoriaModel> obtenerTodasLasCategorias() {
        return categoriaRepository.findAll();
    }

}