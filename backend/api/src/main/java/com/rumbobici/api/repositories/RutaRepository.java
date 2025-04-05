package com.rumbobici.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rumbobici.api.models.RutaModel;

@Repository
public interface RutaRepository extends JpaRepository<RutaModel, Long>{
    
}
