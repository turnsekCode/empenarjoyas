import React from "react";
import styles from "./conversor.module.css";

const BloqueInfoEmpenos = ({ ciudad }) => {
  const primerMes = ciudad.acf.primer_mes;
  const costeTasacion = ciudad.acf.coste_de_tasacion;
  const intereStandar = ciudad.acf.interes_standard;
  const telefono = ciudad.acf.telefono;
  return (
    <div className={styles.contenedorInfo}>
      <p className={styles.primerParrafo}>
        En <span>Quickgold</span> llevamos
        <span>más de 10 años de experiencia</span>
        ofreciendo el servicio de préstamos sobre joyas. Este recorrido permite
        que realices cualquier empeño de oro o plata de forma fácil y rápida.
        Nuestra marca está enfocada<span>a que recuperes tus joyas,</span>por
        esta razón, la promoción del primer mes sin interés es permanente y
        <span>
          permite que obtengas de nuevo tus joyas sin pagar ningún interés.
        </span>
      </p>
      <h5>Ejemplo de Empeño de Joyas</h5>
      <p className={styles.segundoParrafo}>
        Los empeños conllevan un
        <span>
          interés mensual del {intereStandar}% y {primerMes}% de interés primer
          mes.
        </span>{" "}
        Además tiene asociado un gasto de gestión del {costeTasacion}%.
      </p>
      <div className={styles.ejemplo}>
        <p>Si empeñas: 100€</p>
        <p>Obtienes: 97€</p>
      </div>
      <p className={styles.tercerParrafo}>
        Para recuperar las piezas empeñadas pasado el primer mes y finalizar el
        contrato deberías abonar 100€.
      </p>
      <p className={styles.cuartoParrafo}>
        Si retiras las piezas pasado el primer mes, se aplicará el{" "}
        {intereStandar}% de interés por mes.
      </p>
      <div className={styles.contenedorBotonLlamar}>
        <a className={styles.botonLlamarTienda} href={`tel:${telefono}`}>
          LLAMA GRATIS AL {telefono}
        </a>
      </div>
    </div>
  );
};

export default BloqueInfoEmpenos;
