package com.backend.impulces.repositories;

import com.backend.impulces.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<UserModel, Integer> {
    Optional<UserModel> findByUsuario(String usuario);
    Optional<UserModel> findByCorreo(String correo);
}