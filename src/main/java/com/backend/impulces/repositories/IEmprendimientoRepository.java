package com.backend.impulces.repositories;

import com.backend.impulces.models.EmprendimientoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface IEmprendimientoRepository extends JpaRepository<EmprendimientoModel, Integer> {

    // Método para encontrar emprendimientos por el nombre de usuario del creador
    List<EmprendimientoModel> findByCreadoPorUsuario_Usuario(String nombreUsuario);

    // También podrías querer buscar por categoría, etc.
    List<EmprendimientoModel> findByCategoriaServicio(String categoria);
}