import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.redAlert}>
          This documentation is for version 1 of <span className="ksearch-font-family">KSearch</span>. Please visit <Link
            to="https://ksearch.myzlab.com/">
            ksearch.myzlab.com
          </Link> to see documentation version 2 of <span className="ksearch-font-family">KSearch</span>.
        </div>
        <img src="/img/ksearch-logo.png" className="header--imageLogo" style={{ marginBottom: 15 }}>

        </img>
        <h1 className="hero__title ksearch-font-family">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          An easy and intuitive way to write dynamic SQL statements.<br/>
          For Spring Boot + JPA
        </p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
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
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
