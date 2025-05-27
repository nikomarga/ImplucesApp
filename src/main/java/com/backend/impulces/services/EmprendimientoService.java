package com.backend.impulces.services;

import com.backend.impulces.models.EmprendimientoModel;
import com.backend.impulces.models.UserModel;
import com.backend.impulces.repositories.IEmprendimientoRepository;
import com.backend.impulces.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmprendimientoService {

    @Autowired
    private IEmprendimientoRepository emprendimientoRepository;

    @Autowired
    private IUserRepository userRepository;

    public ArrayList<EmprendimientoModel> getEmprendimientos() {
        return (ArrayList<EmprendimientoModel>) emprendimientoRepository.findAll();
    }

    public EmprendimientoModel saveEmprendimiento(EmprendimientoModel emprendimiento, String nombreUsuarioCreador) {
        Optional<UserModel> usuarioOptional = userRepository.findByUsuario(nombreUsuarioCreador);
        if (usuarioOptional.isPresent()) {
            emprendimiento.setCreadoPorUsuario(usuarioOptional.get());
            return emprendimientoRepository.save(emprendimiento);
        } else {
            throw new RuntimeException("Usuario creador no encontrado: " + nombreUsuarioCreador);
        }
    }

    public Optional<EmprendimientoModel> getEmprendimientoById(Integer id) {
        return emprendimientoRepository.findById(id);
    }

    public List<EmprendimientoModel> getEmprendimientosByCreador(String nombreUsuarioCreador) {
        return emprendimientoRepository.findByCreadoPorUsuario_Usuario(nombreUsuarioCreador);
    }

    public EmprendimientoModel updateEmprendimientoById(EmprendimientoModel request, Integer id) {
        EmprendimientoModel emprendimiento = emprendimientoRepository.findById(id).orElse(null);

        if (emprendimiento != null) {
            if (request.getNombreServicio() != null) {
                emprendimiento.setNombreServicio(request.getNombreServicio());
            }
            if (request.getCategoriaServicio() != null) {
                emprendimiento.setCategoriaServicio(request.getCategoriaServicio());
            }
            if (request.getDescripcionServicio() != null) {
                emprendimiento.setDescripcionServicio(request.getDescripcionServicio());
            }
            if (request.getImg1() != null) emprendimiento.setImg1(request.getImg1());
            if (request.getImg2() != null) emprendimiento.setImg2(request.getImg2());
            if (request.getImg3() != null) emprendimiento.setImg3(request.getImg3());
            if (request.getImg4() != null) emprendimiento.setImg3(request.getImg4());
            if (request.getImg5() != null) emprendimiento.setImg3(request.getImg5());

            return emprendimientoRepository.save(emprendimiento);
        }
        return null;
    }

    public Boolean deleteEmprendimiento(Integer id) {
        try {
            if (emprendimientoRepository.existsById(id)) {
                emprendimientoRepository.deleteById(id);
                return true;
            }
            return false;
        } catch (Exception e) {
            return false;
        }
    }
}