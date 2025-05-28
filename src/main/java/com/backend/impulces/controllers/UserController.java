package com.backend.impulces.controllers;

import com.backend.impulces.models.UserModel;
import com.backend.impulces.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UserController {

    @Autowired
    private UserService userService;

    public static class LoginRequest {
        private String correo;
        private String password;

        public String getCorreo() {
            return correo;
        }

        public void setCorreo(String correo) {
            this.correo = correo;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    @GetMapping
    public ArrayList<UserModel> getUsers() {
        return this.userService.getUsers();
    }

    @PostMapping
    public ResponseEntity<UserModel> saveUser(@RequestBody UserModel user) {
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
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error, no se pudo eliminar el usuario con ID " + id + ". Verifique que el ID es correcto.");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        if (loginRequest.getCorreo() == null || loginRequest.getPassword() == null ||
                loginRequest.getCorreo().isEmpty() || loginRequest.getPassword().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", "Correo y contraseña son requeridos"));
        }

        Optional<UserModel> userOptional = userService.loginUser(loginRequest.getCorreo(), loginRequest.getPassword());

        if (userOptional.isPresent()) {
            UserModel user = userOptional.get();
            user.setPassword(null);
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Correo o contraseña inválidos"));
        }
    }
}