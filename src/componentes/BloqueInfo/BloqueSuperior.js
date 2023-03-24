import React from "react";
import styles from "./conversor.module.css";
import BloquePreciosOro from "./BloquePreciosOro";
import BloquePrecioPlata from "./BloquePrecioPlata";

const CalculadoraOro = ({ data, ciudad, loading }) => {
  const primerMes = ciudad.acf.primer_mes;
  const tasacion = ciudad.acf.tasacion;
  const intereStandar = ciudad.acf.interes_standard;
  const telefono = ciudad.acf.telefono;

  return (
    <div className={styles.contenedorAmbosBloquesEmpeno}>
      <div className={styles.contenedorBloqueEmpeno}>
        <h3>
          {primerMes}% interés <span>primer mes</span>
        </h3>
        <div className={styles.contenedorTresBloques}>
          <div className={styles.contenedorBloques}>
            <div className={styles.bloqueIzq}>
              <p>{intereStandar}%</p>
            </div>
            <div className={styles.bloqueDer}>
              <p>Interés mensual</p>
            </div>
          </div>
          <div className={styles.contenedorBloques}>
            <div className={styles.bloqueIzq}>
              <p>{tasacion}%</p>
            </div>
            <div className={styles.bloqueDer}>
              <p>Tasación</p>
            </div>
          </div>
          <div className={styles.contenedorBloques}>
            <div className={styles.bloqueIzq}>
              <p>{primerMes}%</p>
            </div>
            <div className={styles.bloqueDer}>
              <p>Primer mes</p>
            </div>
          </div>
        </div>
        <a className={styles.botonLlamarTienda} href={`tel:${telefono}`}>
          LLAMA GRATIS AL {telefono}
        </a>
      </div>
      <BloquePreciosOro data={data} ciudad={ciudad} loading={loading} />
      <BloquePrecioPlata data={data} ciudad={ciudad} loading={loading} />
    </div>
  );
};

export default CalculadoraOro;
