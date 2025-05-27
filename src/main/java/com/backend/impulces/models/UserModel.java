package com.backend.impulces.models;

import jakarta.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "usuarios")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Integer id;

    @Column(name = "Usuario", nullable = false, length = 120, unique = true)
    private String usuario;

    @Column(name = "Sede", nullable = false, length = 80)
    private String sede;

    @Temporal(TemporalType.DATE)
    @Column(name = "Fecha_nacimiento", nullable = false)
    private Date fechaNacimiento;

    @Column(name = "Correo", nullable = false, length = 255, unique = true)
    private String correo;

    @Column(name = "Password", nullable = false, length = 255)
    private String password;

    @Column(name = "Programa", nullable = false, length = 80)
    private String programa;

    @OneToMany(mappedBy = "creadoPorUsuario", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<EmprendimientoModel> emprendimientos;


    public UserModel() {
    }

    public UserModel(String usuario, String sede, Date fechaNacimiento, String correo, String password, String programa) {
        this.usuario = usuario;
        this.sede = sede;
        this.fechaNacimiento = fechaNacimiento;
        this.correo = correo;
        this.password = password;
        this.programa = programa;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getSede() {
        return sede;
    }

    public void setSede(String sede) {
        this.sede = sede;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

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

    public String getPrograma() {
        return programa;
    }

    public void setPrograma(String programa) {
        this.programa = programa;
    }

    public Set<EmprendimientoModel> getEmprendimientos() {
        return emprendimientos;
    }

    public void setEmprendimientos(Set<EmprendimientoModel> emprendimientos) {
        this.emprendimientos = emprendimientos;
    }
}