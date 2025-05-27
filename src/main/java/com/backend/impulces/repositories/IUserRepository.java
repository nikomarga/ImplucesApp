package com.backend.impulces.repositories;

import com.backend.impulces.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<UserModel, Integer> {

    // Método para buscar un usuario por su nombre de usuario (columna 'Usuario')
    Optional<UserModel> findByUsuario(String usuario);

    // Método para buscar un usuario por su correo (columna 'Correo')
    Optional<UserModel> findByCorreo(String correo);
}