package com.backend.impulces.controllers;

import com.backend.impulces.models.UserModel;
import com.backend.impulces.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ArrayList<UserModel> getUsers() {
        return this.userService.getUsers();
    }

    @PostMapping
    public ResponseEntity<UserModel> saveUser(@RequestBody UserModel user) {
        // Aquí puedes añadir validaciones antes de llamar al servicio
        UserModel savedUser = this.userService.saveUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<UserModel> getUserById(@PathVariable("id") Integer id) {
        Optional<UserModel> user = this.userService.getById(id);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping(path = "/porUsuario/{usuario}")
    public ResponseEntity<UserModel> getUserByUsuario(@PathVariable("usuario") String usuario) {
        Optional<UserModel> user = this.userService.getByUsuario(usuario);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping(path = "/porCorreo/{correo}")
    public ResponseEntity<UserModel> getUserByCorreo(@PathVariable("correo") String correo) {
        Optional<UserModel> user = this.userService.getByCorreo(correo);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<UserModel> updateUserById(@RequestBody UserModel request, @PathVariable("id") Integer id) {
        UserModel updatedUser = this.userService.updateById(request, id);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deleteById(@PathVariable("id") Integer id) {
        boolean ok = this.userService.deleteUser(id);
        if (ok) {
            return ResponseEntity.ok("Usuario con ID " + id + " eliminado exitosamente.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error, no se pudo eliminar el usuario con ID " + id + " (puede que no exista o haya ocurrido un error interno).");
        }
    }
}