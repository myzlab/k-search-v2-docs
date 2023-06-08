import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureListTop = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Ksearch ha sido diseñada con la comodidad del desarrollador en mente.
        Con funciones orientadas a seguir la misma secuencia que una query SQL,
        te sorprenderás de lo rápido que podrás dominar esta herramienta.

        {/* Desde la instalación hasta la configuración,
        cada paso ha sido realizado para que pueda utilizarlo sin dificultades.
        No necesitas ser un experto en tecnología para sacar el máximo provecho de KSearch. */}
      </>
    ),
  },
  {
    title: 'Query only what you need',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Ksearch esta desarrollado pensando en la precision de las operaciones que desees realizar sobre la base de datos.
        Ejecutando siempre exactamente lo que tu indiques, sin queries, columnas o tablas adicionales.
      </>
    ),
  },
  {
    title: '100% SQL',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Ksearch se ha diseñado específicamente para generar queries 100% SQL.

        Olvídate de escribir manualmente cada consulta y de lidiar con posibles errores.

        Simplifica tu trabajo y ahorra tiempo al dejar que nuestra herramienta se encargue de generar las queries SQL
        necesarias para tus operaciones de base de datos.
      </>
    ),
  },
];

const FeatureListBottom = [
  {
    title: 'Build response object effortlessly',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Just call a method and your ResponseEntity will be automatically created from the executed query.
      </>
    ),
  },
  {
    title: 'Automatic mapping',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Automatically map the data extracted from database into an object with defined attributes to an easy manage of data queried.
      </>
    ),
  },
  {
    title: 'Supports multiple datasources simultaneously',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        KSearch actualmente solo soporta el motor de base de datos PostgreSQL
        (Estamos trabajando para soportar otros motores de base de datos)
        Sin embargo, puedes conectar multiples PostgreSQL databases at the same time.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features} style={{ flexDirection: 'column' }}>
      <div className="container">
        <div className="row">
          {FeatureListTop.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          {FeatureListBottom.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
