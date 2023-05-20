import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureListTop = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Ksearch is designed of an intuitive way following the same order as an SQL query.
      </>
    ),
  },
  {
    title: 'Query only what you need',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Ksearch allows you to indicate exactly which columns and which tables you want to consult.
        Not one byte too many!
      </>
    ),
  },
  {
    title: '100% SQL',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Ksearch supports all clauses and possible queries 100% SQL to the PostgreSQL database!
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
        KSearch is developed to support connections to multiple PostgreSQL databases at the same time.
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
