import React from "react";
import styles from "./conversor.module.css";
import logoPlata from "../../../public/assets/logoPlata.png";
import Image from "next/image";

const BloquePrecioPlata = ({ data, ciudad, loading }) => {
  const precio999 =
    (data?.result?.Tarifas?.Plata[3].Productos[0].Precio).toFixed(2);
  const precio925 =
    (data?.result?.Tarifas?.Plata[2].Productos[0].Precio).toFixed(2);
  const precio800 =
    (data?.result?.Tarifas?.Plata[0].Productos[0].Precio).toFixed(2);
  const masDePlata = ciudad?.acf?.para_mas_de_plata;
  return (
    <div className={styles.contenedorPrecioPlata}>
      <div className={styles.contenedorImagen}>
        <Image src={logoPlata} width={50} height={50} alt="Logo Oro" />
      </div>
      <div className={styles.contenedorBloqueMasDe}>
        <h4>
          Precio Plata <span>menos de {masDePlata}kg</span>
        </h4>
        <div className={styles.contenedorPrecios}>
          <div className={styles.precios}>
            {loading ? (
              <p>
                {precio999}
                <span>€/kg</span>
              </p>
            ) : (
              <p>Cargando</p>
            )}
            <span>999</span>
          </div>
          <div className={styles.precios}>
            {loading ? (
              <p>
                {precio925}
                <span>€/kg</span>
              </p>
            ) : (
              <p>Cargando</p>
            )}
            <span>925</span>
          </div>
          <div className={styles.precios}>
            {loading ? (
              <p>
                {precio800}
                <span>€/kg</span>
              </p>
            ) : (
              <p>Cargando</p>
            )}
            <span>800</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloquePrecioPlata;
