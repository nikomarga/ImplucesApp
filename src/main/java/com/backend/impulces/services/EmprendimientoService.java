package com.backend.impulces.services;

import com.backend.impulces.models.EmprendimientoModel;
import com.backend.impulces.models.UserModel;
import com.backend.impulces.repositories.IEmprendimientoRepository;
import com.backend.impulces.repositories.IUserRepository;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.io.Writer;
import java.util.List;
import java.util.Optional;


@Service
public class EmprendimientoService {

    @Autowired
    private IEmprendimientoRepository emprendimientoRepository;

    @Autowired
    private IUserRepository userRepository;

    @Transactional(readOnly = true)
    public List<EmprendimientoModel> getAllEmprendimientos() {
        return emprendimientoRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<EmprendimientoModel> getEmprendimientoById(Integer id) {
        return emprendimientoRepository.findById(id);
    }

    @Transactional
    public EmprendimientoModel saveEmprendimiento(EmprendimientoModel emprendimiento, String correoUsuario) {
        Optional<UserModel> usuarioOptional = userRepository.findByCorreo(correoUsuario);
        if (usuarioOptional.isPresent()) {
            emprendimiento.setCreadoPorUsuario(usuarioOptional.get());
            return emprendimientoRepository.save(emprendimiento);
        } else {
            throw new RuntimeException("Usuario con correo " + correoUsuario + " no encontrado.");
        }
    }

    @Transactional
    public EmprendimientoModel updateEmprendimiento(Integer id, EmprendimientoModel emprendimientoDetails) {
        EmprendimientoModel emprendimiento = emprendimientoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Emprendimiento no encontrado con id: " + id));

        emprendimiento.setNombreServicio(emprendimientoDetails.getNombreServicio());
        emprendimiento.setCategoriaServicio(emprendimientoDetails.getCategoriaServicio());
        emprendimiento.setDescripcionServicio(emprendimientoDetails.getDescripcionServicio());
        emprendimiento.setImg1(emprendimientoDetails.getImg1());
        emprendimiento.setImg2(emprendimientoDetails.getImg2());
        emprendimiento.setImg3(emprendimientoDetails.getImg3());
        emprendimiento.setImg4(emprendimientoDetails.getImg4());
        emprendimiento.setImg5(emprendimientoDetails.getImg5());

        return emprendimientoRepository.save(emprendimiento);
    }

    @Transactional
    public boolean deleteEmprendimiento(Integer id) {
        if (emprendimientoRepository.existsById(id)) {
            emprendimientoRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Transactional(readOnly = true)
    public List<EmprendimientoModel> buscarPorNombre(String nombre) {
        return emprendimientoRepository.findByNombreServicioContainingIgnoreCase(nombre);
    }

    @Transactional(readOnly = true)
    public List<EmprendimientoModel> getEmprendimientosPorSede(String sede) {
        return emprendimientoRepository.findByCreadoPorUsuario_SedeIgnoreCase(sede);
    }

    @Transactional(readOnly = true)
    public void exportEmprendimientosToCsv(Writer writer) {
        List<EmprendimientoModel> emprendimientos = emprendimientoRepository.findAll();
        try (CSVPrinter csvPrinter = new CSVPrinter(writer, CSVFormat.DEFAULT
                .withHeader("ID", "Nombre Servicio", "Categoria", "Descripcion", "Imagen 1", "Imagen 2", "Imagen 3", "Imagen 4", "Imagen 5", "Creado Por"))) {
            for (EmprendimientoModel emprendimiento : emprendimientos) {
                String creadoPor = (emprendimiento.getCreadoPorUsuario() != null) ? emprendimiento.getCreadoPorUsuario().getUsuario() : "N/A";
                csvPrinter.printRecord(
                        emprendimiento.getId(),
                        emprendimiento.getNombreServicio(),
                        emprendimiento.getCategoriaServicio(),
                        emprendimiento.getDescripcionServicio(),
                        emprendimiento.getImg1(),
                        emprendimiento.getImg2(),
                        emprendimiento.getImg3(),
                        emprendimiento.getImg4(),
                        emprendimiento.getImg5(),
                        creadoPor
                );
            }
        } catch (IOException e) {
            throw new RuntimeException("Error al escribir el archivo CSV: " + e.getMessage());
        }
    }
}