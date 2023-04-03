import React from "react";
import BloqueInfoTienda from "../BloqueInfoTienda/BloqueInfoTienda";
import Conversor from "../BloqueInfo/Conversor";
import styles from "./seccionDos.module.css";

const SeccionTres = ({ ciudad, tiendaGoogle, data, loading }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Conversor data={data} loading={loading} ciudad={ciudad} />
      <BloqueInfoTienda ciudad={ciudad} tiendaGoogle={tiendaGoogle} />
    </div>
  );
};

export default SeccionTres;
