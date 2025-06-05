import React, { useState } from "react";
import Buscar from "./Buscar";
import Services from "./Services";

export default function ServiciosPage() {
  const [filtros, setFiltros] = useState({
    sedes: [],
    categorias: []
  });

  return (
    <div className="d-flex">
      <Buscar setFiltros={setFiltros} />
      <Services filtros={filtros} />
    </div>
  );
}
