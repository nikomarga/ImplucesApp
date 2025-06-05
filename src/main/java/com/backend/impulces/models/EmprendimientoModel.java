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

    @Column(name = "Img_1", length = 300, nullable = false)
    private String img1;

    @Column(name = "Img_2", length = 300)
    private String img2;

    @Column(name = "Img_3", length = 300)
    private String img3;

    @Column(name = "Img_4", length = 300)
    private String img4;

    @Column(name = "Img_5", length = 300)
    private String img5;

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

    public String getImg1() {
        return img1;
    }

    public void setImg1(String img1) {
        this.img1 = img1;
    }

    public String getImg2() {
        return img2;
    }

    public void setImg2(String img2) {
        this.img2 = img2;
    }

    public String getImg3() {
        return img3;
    }

    public void setImg3(String img3) {
        this.img3 = img3;
    }

    public String getImg4() {
        return img4;
    }

    public void setImg4(String img4) {
        this.img4 = img4;
    }

    public String getImg5() {
        return img5;
    }

    public void setImg5(String img5) {
        this.img5 = img5;
    }

    public UserModel getCreadoPorUsuario() {
        return creadoPorUsuario;
    }

    public void setCreadoPorUsuario(UserModel creadoPorUsuario) {
        this.creadoPorUsuario = creadoPorUsuario;
    }
}