package com.backend.impulces.controllers;

import com.backend.impulces.models.EmprendimientoModel;
import com.backend.impulces.services.EmprendimientoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
}