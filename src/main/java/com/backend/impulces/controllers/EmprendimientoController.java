package com.backend.impulces.controllers;

import com.backend.impulces.models.EmprendimientoModel;
import com.backend.impulces.services.EmprendimientoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/emprendimientos")
public class EmprendimientoController {

    @Autowired
    private EmprendimientoService emprendimientoService;

    @GetMapping
    public ArrayList<EmprendimientoModel> getEmprendimientos() {
        return this.emprendimientoService.getEmprendimientos();
    }

    @PostMapping
    public ResponseEntity<?> saveEmprendimiento(@RequestBody EmprendimientoModel emprendimiento,
                                                @RequestParam String creadorUsuario) {
        try {
            EmprendimientoModel savedEmprendimiento = this.emprendimientoService.saveEmprendimiento(emprendimiento, creadorUsuario);
            return new ResponseEntity<>(savedEmprendimiento, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<EmprendimientoModel> getEmprendimientoById(@PathVariable("id") Integer id) {
        Optional<EmprendimientoModel> emprendimiento = this.emprendimientoService.getEmprendimientoById(id);
        return emprendimiento.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping(path = "/porCreador/{nombreUsuarioCreador}")
    public List<EmprendimientoModel> getEmprendimientosPorCreador(@PathVariable String nombreUsuarioCreador) {
        return this.emprendimientoService.getEmprendimientosByCreador(nombreUsuarioCreador);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<EmprendimientoModel> updateEmprendimientoById(@RequestBody EmprendimientoModel request, @PathVariable("id") Integer id) {
        EmprendimientoModel updatedEmprendimiento = this.emprendimientoService.updateEmprendimientoById(request, id);
        if (updatedEmprendimiento != null) {
            return ResponseEntity.ok(updatedEmprendimiento);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deleteEmprendimientoById(@PathVariable("id") Integer id) {
        boolean ok = this.emprendimientoService.deleteEmprendimiento(id);
        if (ok) {
            return ResponseEntity.ok("Emprendimiento con ID " + id + " eliminado exitosamente.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error, no se pudo eliminar el emprendimiento con ID " + id);
        }
    }
}