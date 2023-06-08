import React from 'react';
import styles from './../../pages/index.module.scss';
import clsx from 'clsx';
import K from '@site/src/components/K';

export default function OnlyYouNeedFeature() {
  return (
    <div className={styles.bgDark}>
      <div className={clsx(styles.featureInverse, styles.feature)}>
        <div className={styles.col1R}>
          <div className={styles.architectureWrapper}>
            <img src="/img/1kc1.gif" className={styles.codeImage} />
          </div>
        </div>
        <div className={styles.col2R}>
          <h2>Query only what you need</h2>
          <p>
            <K/> is developed prioritizing the precision of the operations you want to perform on the database.
            <br/>
            <br/>
            This means that exactly what you specify will always be executed, without additional queries, columns, or tables.
          </p>
        </div>
      </div>
    </div>
  );
}
