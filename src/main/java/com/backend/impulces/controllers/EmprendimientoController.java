package com.backend.impulces.controllers;

import com.backend.impulces.models.EmprendimientoModel;
import com.backend.impulces.services.EmprendimientoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/emprendimientos")
public class EmprendimientoController {

    @Autowired
    private EmprendimientoService emprendimientoService;

    public static class CreateEmprendimientoRequest {
        private EmprendimientoModel emprendimiento;
        private String correoUsuario;

        public EmprendimientoModel getEmprendimiento() {
            return emprendimiento;
        }

        public void setEmprendimiento(EmprendimientoModel emprendimiento) {
            this.emprendimiento = emprendimiento;
        }

        public String getCorreoUsuario() {
            return correoUsuario;
        }

        public void setCorreoUsuario(String correoUsuario) {
            this.correoUsuario = correoUsuario;
        }
    }

    @GetMapping
    public ResponseEntity<List<EmprendimientoModel>> getAllEmprendimientos() {
        List<EmprendimientoModel> emprendimientos = emprendimientoService.getAllEmprendimientos();
        return ResponseEntity.ok(emprendimientos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmprendimientoModel> getEmprendimientoById(@PathVariable Integer id) {
        Optional<EmprendimientoModel> emprendimiento = emprendimientoService.getEmprendimientoById(id);
        return emprendimiento.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> createEmprendimiento(@RequestBody CreateEmprendimientoRequest request) {
        try {
            EmprendimientoModel nuevoEmprendimiento = emprendimientoService.saveEmprendimiento(request.getEmprendimiento(), request.getCorreoUsuario());
            return new ResponseEntity<>(nuevoEmprendimiento, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmprendimientoModel> updateEmprendimiento(@PathVariable Integer id, @RequestBody EmprendimientoModel emprendimientoDetails) {
        try {
            EmprendimientoModel updatedEmprendimiento = emprendimientoService.updateEmprendimiento(id, emprendimientoDetails);
            return ResponseEntity.ok(updatedEmprendimiento);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmprendimiento(@PathVariable Integer id) {
        boolean deleted = emprendimientoService.deleteEmprendimiento(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<EmprendimientoModel>> buscarEmprendimientosPorNombre(@RequestParam String nombre) {
        if (nombre == null || nombre.trim().isEmpty()) {
            return ResponseEntity.badRequest().body(List.of());
        }
        List<EmprendimientoModel> emprendimientos = emprendimientoService.buscarPorNombre(nombre);
        if (emprendimientos.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(emprendimientos);
    }

    @PostMapping(value = "/subir", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> crearEmprendimientoConImagenes(
            @RequestParam String nombreServicio,
            @RequestParam String categoriaServicio,
            @RequestParam String descripcionServicio,
            @RequestParam String correoUsuario,
            @RequestParam("imagenes") List<MultipartFile> imagenes
    ) {
        try {
            EmprendimientoModel emprendimiento = new EmprendimientoModel();
            emprendimiento.setNombreServicio(nombreServicio);
            emprendimiento.setCategoriaServicio(categoriaServicio);
            emprendimiento.setDescripcionServicio(descripcionServicio);

            if (imagenes.size() > 0) emprendimiento.setImg1(imagenes.get(0).getBytes());
            if (imagenes.size() > 1) emprendimiento.setImg2(imagenes.get(1).getBytes());
            if (imagenes.size() > 2) emprendimiento.setImg3(imagenes.get(2).getBytes());
            if (imagenes.size() > 3) emprendimiento.setImg4(imagenes.get(3).getBytes());
            if (imagenes.size() > 4) emprendimiento.setImg5(imagenes.get(4).getBytes());

            EmprendimientoModel guardado = emprendimientoService.saveEmprendimiento(emprendimiento, correoUsuario);
            return new ResponseEntity<>(guardado, HttpStatus.CREATED);

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al procesar imágenes");
        }
    }

    @GetMapping("/imagen/{id}/{numero}")
    public ResponseEntity<byte[]> obtenerImagen(@PathVariable Integer id, @PathVariable int numero) {
        Optional<EmprendimientoModel> optional = emprendimientoService.getEmprendimientoById(id);
        if (optional.isEmpty()) return ResponseEntity.notFound().build();

        EmprendimientoModel emp = optional.get();
        byte[] imagen = switch (numero) {
            case 1 -> emp.getImg1();
            case 2 -> emp.getImg2();
            case 3 -> emp.getImg3();
            case 4 -> emp.getImg4();
            case 5 -> emp.getImg5();
            default -> null;
        };

        if (imagen == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(imagen);
    }
}