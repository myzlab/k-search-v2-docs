import React from 'react';
import styles from './../../pages/index.module.scss';
import clsx from 'clsx';
import K from '@site/src/components/K';

export default function MultipleDatasources() {
  return (
    <div className={styles.bgDark}>
      <div className={clsx(styles.featureInverse, styles.feature)}>
        <div className={styles.col1R}>
          <img src="img/multiple-databases.png" className={styles.codeImage} />
        </div>
        <div className={styles.col2R}>
          <h2>Supports multiple datasources simultaneously</h2>
          <p>
            <K/> currently only supports the PostgreSQL database system (We are working to support other database systems).
            <br/>
            <br/>
            However, you can connect <strong>multiple PostgreSQL databases</strong> at the same time.
          </p>
        </div>
      </div>
    </div>
  );
}
