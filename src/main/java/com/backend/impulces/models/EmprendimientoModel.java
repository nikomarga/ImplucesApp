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

    @Lob
    @Column(name = "Img_1")
    private byte[] img1;

    @Lob
    @Column(name = "Img_2")
    private byte[] img2;

    @Lob
    @Column(name = "Img_3")
    private byte[] img3;

    @Lob
    @Column(name = "Img_4")
    private byte[] img4;

    @Lob
    @Column(name = "Img_5")
    private byte[] img5;

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

    public byte[] getImg1() {
        return img1;
    }

    public void setImg1(byte[] img1) {
        this.img1 = img1;
    }

    public byte[] getImg2() {
        return img2;
    }

    public void setImg2(byte[] img2) {
        this.img2 = img2;
    }

    public byte[] getImg3() {
        return img3;
    }

    public void setImg3(byte[] img3) {
        this.img3 = img3;
    }

    public byte[] getImg4() {
        return img4;
    }

    public void setImg4(byte[] img4) {
        this.img4 = img4;
    }

    public byte[] getImg5() {
        return img5;
    }

    public void setImg5(byte[] img5) {
        this.img5 = img5;
    }

    public UserModel getCreadoPorUsuario() {
        return creadoPorUsuario;
    }

    public void setCreadoPorUsuario(UserModel creadoPorUsuario) {
        this.creadoPorUsuario = creadoPorUsuario;
    }
}