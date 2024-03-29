import Head from "next/head";
import Layout from "@/componentes/Layout/Layout";
import SeccionUno from "@/componentes/SeccionUnoTienda/SeccionUnoTienda";

import React from "react";
import Script from "next/script";
import SeccionTres from "@/componentes/SeccionTres/SeccionTres";
const index = ({ ciudad, tiendaGoogle, general }) => {
  return (
    <>
      <Head>
        <title>
          Las mejores condiciones de {ciudad?.acf?.ciudad_landing} en empeño de
          joyas solo en Quickgold | Quickgold
        </title>
        <meta
          name="description"
          content={`Empeña tus joyas de oro y plata en ${ciudad?.acf?.ciudad_landing} sin pagar intereses el primer mes siempre con el mejor servicio garantizado`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icon.png" />
        {ciudad?.acf?.nonscript_chat}
      </Head>
      <Script id="livechat" strategy="lazyOnload">
        {ciudad?.acf?.script_chat}
      </Script>

      <Layout ciudad={ciudad}>
        <SeccionUno
          nombreCiudad={ciudad?.acf?.ciudad_landing}
          ciudad={ciudad}
          tiendaGoogle={tiendaGoogle}
        />

        <SeccionTres
          ciudad={ciudad}
          tiendaGoogle={tiendaGoogle}
          comprar={ciudad?.acf?.vende_divisa}
          telefono={ciudad?.acf?.telefono}
        />
      </Layout>
    </>
  );
};

export default index;
const idPaginaWp = "14390";
const apiGeneral = "13848";
//variables id de tiendas de la api de wordpress

export async function getStaticProps() {
  //datos de los campos personalizados de la ciudad
  const ciudad1 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await ciudad1.json();
  //fin datos de los campos personalizados de la ciudad
  const res = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`
  );
  const general = await res.json();
  //datos de google para tiendas
  const tienda = ciudad?.acf?.tienda;
  const google = await fetch(
    `https://panel.quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda}.txt`
  );
  const tiendaGoogle = await google.json();

  return {
    props: {
      ciudad,
      tiendaGoogle,
      general,
    },
    revalidate: 1,
  };
}
