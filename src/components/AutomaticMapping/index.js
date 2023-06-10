import React from 'react';
import styles from './../../pages/index.module.scss';
import K from '@site/src/components/K';

export default function AutomaticMapping() {
  return (
    <div className={styles.bgWhite}>
      <div className={styles.feature}>
        <div className={styles.col1L}>
          <h2>Automatic mapping</h2>
          <p>
            Automatically map the data extracted from database into an object with defined attributes to an <strong>easy manage</strong> of data queried.
          </p>
        </div>
        <div className={styles.col2L}>
          <img src="img/automatic.png" className={styles.codeImage} />
        </div>
      </div>
    </div>
  );
}

