import Image from "next/image";
import React, { useState } from "react";
import styles from "./conversor.module.css";
import logoEmpeno from "../../../public/assets/logoEmpeno.png";
import BloqueSuperior from "./BloqueSuperior";
import BloqueInfoEmpenos from "./BloqueInfoEmpenos";

const Conversor = ({ data, ciudad, loading }) => {
  return (
    <div className={styles.contenedorConversorBanderas}>
      <div className={styles.contenedorConversor}>
        <div className={styles.conversorTitulo}>
          <Image src={logoEmpeno} width={50} height={50} alt="Logo Divisa" />
          <div className={styles.conversorTexto}>
            <h2>Empeño de joyas</h2>
            {/*<p>¿Cuánto cuesta ahora el oro?</p>*/}
          </div>
        </div>
        <BloqueSuperior data={data} ciudad={ciudad} loading={loading} />
      </div>
      <BloqueInfoEmpenos ciudad={ciudad} />
    </div>
  );
};

export default Conversor;
