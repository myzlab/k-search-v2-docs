import React from 'react';
import styles from './../../pages/index.module.scss';
import clsx from 'clsx';
import K from '@site/src/components/K';

export default function BuildResponse() {
  return (
    <div className={styles.bgDark}>
      <div className={clsx(styles.featureInverse, styles.feature)}>
        <div className={styles.col1R}>
          <img src="img/buildresponse.png" className={styles.codeImage} />
        </div>
        <div className={styles.col2R}>
          <h2>Build response object effortlessly</h2>
          <p>
            Just call a method and your <strong>ResponseEntity</strong> will be <strong>automatically</strong> created from the executed query.
          </p>
        </div>
      </div>
    </div>
  );
}
