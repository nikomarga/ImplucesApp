package com.backend.impulces.services;

import com.backend.impulces.models.UserModel;
import com.backend.impulces.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    IUserRepository userRepository;

    public ArrayList<UserModel> getUsers() {
        return (ArrayList<UserModel>) userRepository.findAll();
    }

    public UserModel saveUser(UserModel user) {
        return userRepository.save(user);
    }

    public Optional<UserModel> getById(Integer id) {
        return userRepository.findById(id);
    }

    public Optional<UserModel> getByUsuario(String usuario) {
        return userRepository.findByUsuario(usuario);
    }

    public Optional<UserModel> getByCorreo(String correo) {
        return userRepository.findByCorreo(correo);
    }

    public UserModel updateById(UserModel request, Integer id) {
        // El método .get() lanzará NoSuchElementException si no se encuentra, considera manejarlo.
        UserModel user = userRepository.findById(id).orElse(null);

        if (user != null) {
            if (request.getUsuario() != null) {
                user.setUsuario(request.getUsuario());
            }
            if (request.getSede() != null) {
                user.setSede(request.getSede());
            }
            if (request.getFechaNacimiento() != null) {
                user.setFechaNacimiento(request.getFechaNacimiento());
            }
            if (request.getCorreo() != null) {
                user.setCorreo(request.getCorreo());
            }
            if (request.getPassword() != null && !request.getPassword().isEmpty()) {
                user.setPassword(request.getPassword());
            }
            if (request.getPrograma() != null) {
                user.setPrograma(request.getPrograma());
            }
            return userRepository.save(user);
        }
        return null;
    }

    public Boolean deleteUser (Integer id){
        try{
            if (userRepository.existsById(id)) {
                userRepository.deleteById(id);
                return true;
            }
            return false;
        } catch (Exception e) {
            return false;
        }
    }
}