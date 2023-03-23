import React from "react";
import Conversor from "../BloqueInfo/Conversor";
import ListadoTiendas from "../ListadoTiendas/ListadoTiendas";
import styles from "./seccionDos.module.css";

const SeccionDos = ({ ciudad, arrayTiendas, data }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Conversor data={data} ciudad={ciudad} />
      <ListadoTiendas ciudad={ciudad} arrayTiendas={arrayTiendas} />
    </div>
  );
};

export default SeccionDos;
