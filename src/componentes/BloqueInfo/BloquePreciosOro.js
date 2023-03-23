import Image from "next/image";
import React from "react";
import logoOro from "../../../public/assets/logoOro.png";
import styles from "./conversor.module.css";

const BloquePreciosPlata = ({ data, ciudad }) => {
  const precio24k = data?.result?.Tarifas?.Oro[12].Productos[0].Precio / 1000;
  const precio18k = data?.result?.Tarifas?.Oro[2].Productos[0].Precio / 1000;
  const precio14k = data?.result?.Tarifas?.Oro[10].Productos[0].Precio / 1000;
  const masDeOro = ciudad?.acf?.precio_mas_de_oro;
  const precioMas24k = (precio24k + parseFloat(masDeOro)).toFixed(2);
  const precioMas18k = (precio18k + parseFloat(masDeOro)).toFixed(2);
  const precioMas14k = (precio14k + parseFloat(masDeOro)).toFixed(2);
  const paraMasOro = ciudad.acf.para_mas_de_oro;
  return (
    <div className={styles.contenedorPrecioOro}>
      <div className={styles.contenedorImagen}>
        <Image src={logoOro} width={50} height={50} alt="Logo Oro" />
      </div>
      <div className={styles.contenedorBloqueMasDe}>
        <h4>
          Precio Oro <span>más de {paraMasOro}g</span>
        </h4>
        <div className={styles.contenedorPrecios}>
          <div className={styles.precios}>
            <p>
              {precioMas24k} <span>€/g</span>
            </p>
            <span>24K</span>
          </div>
          <div className={styles.precios}>
            <p>
              {precioMas18k} <span>€/g</span>
            </p>
            <span>18K</span>
          </div>
          <div className={styles.precios}>
            <p>
              {precioMas14k} <span>€/g</span>
            </p>
            <span>14K</span>
          </div>
        </div>
      </div>
      <div className={styles.contenedorBloqueMasDe}>
        <h4>
          Precio Oro <span>menos de {paraMasOro}g</span>
        </h4>
        <div className={styles.contenedorPrecios}>
          <div className={styles.precios}>
            <p>
              {precio24k.toFixed(2)} <span>€/g</span>
            </p>
            <span>24K</span>
          </div>
          <div className={styles.precios}>
            <p>
              {precio18k.toFixed(2)} <span>€/g</span>
            </p>
            <span>18K</span>
          </div>
          <div className={styles.precios}>
            <p>
              {precio14k.toFixed(2)} <span>€/g</span>
            </p>
            <span>14K</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloquePreciosPlata;
