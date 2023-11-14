import React from "react";
import BloqueInfoTienda from "../BloqueInfoTienda/BloqueInfoTienda";
import Empenos from "../BloqueInfo/Empenos";
import styles from "./seccionDos.module.css";

const SeccionTres = ({ ciudad, tiendaGoogle }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Empenos ciudad={ciudad} />
      <BloqueInfoTienda ciudad={ciudad} tiendaGoogle={tiendaGoogle} />
    </div>
  );
};

export default SeccionTres;
