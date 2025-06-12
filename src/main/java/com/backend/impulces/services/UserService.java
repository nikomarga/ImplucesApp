package com.backend.impulces.services;

import com.backend.impulces.models.UserModel;
import com.backend.impulces.repositories.IUserRepository;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Optional;
import java.util.List; 

@Service
public class UserService {

    @Autowired
    IUserRepository userRepository;


    @Transactional(readOnly = true)
    public Optional<UserModel> loginUser(String correo, String password) {
        Optional<UserModel> userOptional = userRepository.findByCorreo(correo);
        if (userOptional.isPresent()) {
            UserModel user = userOptional.get();
            if (user.getPassword() != null && user.getPassword().equals(password)) {
                return Optional.of(user);
            }
        }
        return Optional.empty();
    }

    public ArrayList<UserModel> getUsers() {
        return (ArrayList<UserModel>) userRepository.findAll();
    }

    @Transactional
    public UserModel saveUser(UserModel user) {
        return userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public Optional<UserModel> getById(Integer id) {
        return userRepository.findById(id);
    }

    @Transactional(readOnly = true)
    public Optional<UserModel> getByUsuario(String usuario) {
        return userRepository.findByUsuario(usuario);
    }

    @Transactional(readOnly = true)
    public Optional<UserModel> getByCorreo(String correo) {
        return userRepository.findByCorreo(correo);
    }

    @Transactional
    public UserModel updateById(UserModel request, Integer id) {
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
            if (request.getUsertype() != null) { 
                user.setUsertype(request.getUsertype());
            }
            return userRepository.save(user);
        }
        return null;
    }

    @Transactional
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

    @Transactional(readOnly = true)
    public void exportUsersToCsv(Writer writer) throws IOException {
        List<UserModel> users = userRepository.findAll(); 
        try (CSVPrinter csvPrinter = new CSVPrinter(writer, CSVFormat.DEFAULT
                .withHeader("ID", "Usuario", "Sede", "Fecha Nacimiento", "Correo", "Programa", "Tipo de Usuario"))) { 
            for (UserModel user : users) {
                csvPrinter.printRecord(
                        user.getId(),
                        user.getUsuario(),
                        user.getSede(),
                        user.getFechaNacimiento(),
                        user.getCorreo(),
                        user.getPrograma(),
                        user.getUsertype()
                );
            }
        } catch (IOException e) {
            throw new RuntimeException("Error al escribir el archivo CSV de usuarios: " + e.getMessage(), e);
        }
    }
}
