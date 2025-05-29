package com.backend.impulces.repositories;

import com.backend.impulces.models.EmprendimientoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
 
@Repository
public interface IEmprendimientoRepository extends JpaRepository<EmprendimientoModel, Integer> {
    List<EmprendimientoModel> findByCreadoPorUsuario_Usuario(String nombreUsuario);
    List<EmprendimientoModel> findByCategoriaServicio(String categoria);
    List<EmprendimientoModel> findByNombreServicioContainingIgnoreCase(String nombre);
}