package com.backend.impulces.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "emprendimientos")
public class EmprendimientoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Integer id;

    @Column(name = "Nombre_servicio", length = 100, nullable = false)
    private String nombreServicio;

    @Column(name = "Categoria_servicio", length = 100, nullable = false)
    private String categoriaServicio;

    @Column(name = "Descripcion_servicio", columnDefinition = "TEXT")
    private String descripcionServicio;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Creado_por", referencedColumnName = "Usuario")
    @JsonBackReference
    private UserModel creadoPorUsuario;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombreServicio() {
        return nombreServicio;
    }

    public void setNombreServicio(String nombreServicio) {
        this.nombreServicio = nombreServicio;
    }

    public String getCategoriaServicio() {
        return categoriaServicio;
    }

    public void setCategoriaServicio(String categoriaServicio) {
        this.categoriaServicio = categoriaServicio;
    }

    public String getDescripcionServicio() {
        return descripcionServicio;
    }

    public void setDescripcionServicio(String descripcionServicio) {
        this.descripcionServicio = descripcionServicio;
    }

    public UserModel getCreadoPorUsuario() {
        return creadoPorUsuario;
    }

    public void setCreadoPorUsuario(UserModel creadoPorUsuario) {
        this.creadoPorUsuario = creadoPorUsuario;
    }
}