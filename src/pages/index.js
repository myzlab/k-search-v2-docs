import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import IntuitiveFeature from '@site/src/components/IntuitiveFeature';
import OnlyYouNeedFeature from '@site/src/components/OnlyYouNeedFeature';
import SQL100Feature from '@site/src/components/SQL100Feature';

import styles from './index.module.scss';

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner, styles.bgDark)}>
      <div className="container">
        <h1 className="hero__title ksearch-font-family">KSearch</h1>
        <p className="hero__subtitle">
          A new way to write dynamic SQL statements<br/>
          Exclusively for Spring Boot
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
      <main>
        <IntuitiveFeature />
        <OnlyYouNeedFeature />
        <SQL100Feature />
      </main>
    </Layout>
  );
}
