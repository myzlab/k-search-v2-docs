import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import IntuitiveFeature from '@site/src/components/IntuitiveFeature';
import OnlyYouNeedFeature from '@site/src/components/OnlyYouNeedFeature';
import BuildResponse from '@site/src/components/BuildResponse';
import SQL100Feature from '@site/src/components/SQL100Feature';
import AutomaticMapping from '@site/src/components/AutomaticMapping';
import MultipleDatasources from '@site/src/components/MultipleDatasources';


import styles from './index.module.scss';

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx(styles.heroTitle, "ksearch-font-family")}>KSearch</h1>
        <p className={styles.heroSubtitle}>
          A new way to write dynamic SQL statements<br/>
          Currently only for Java + Spring Boot
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <div className={styles.main}>
        <IntuitiveFeature />
        <OnlyYouNeedFeature />
        <SQL100Feature />
        <BuildResponse />
        <AutomaticMapping />
        <MultipleDatasources />
      </div>
    </Layout>
  );
}
