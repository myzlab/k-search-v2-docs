import React from 'react';
import styles from './../../pages/index.module.scss';
import K from '@site/src/components/K';

export default function IntuitiveFeature() {
  return (
    <div className={styles.bgWhite}>
      <div className={styles.feature}>
        <div className={styles.col1L}>
          <h2>Easy to Use</h2>
          <p>
            <K/> has been designed with <strong>developer</strong> convenience in mind.
            <br />
            <br />
            With functions geared to follow the same sequence as an <strong>SQL query</strong>, you'll be surprised how quickly you can master this tool.
            <br />
            <br />
            From installation to configuration, every step has been made so that you can use it without <strong>any difficulties.</strong>
          </p>
        </div>
        <div className={styles.col2L}>
          <img src="https://777b136e9f812c76.demo.carrd.co/assets/images/image03.jpg?v=843ba104" className={styles.codeImage} />
        </div>
      </div>
    </div>
  );
}

