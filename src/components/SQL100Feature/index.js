import React from 'react';
import styles from './../../pages/index.module.scss';
import K from '@site/src/components/K';

export default function SQL100Feature() {
  return (
    <div className={styles.bgWhite}>
      <div className={styles.feature}>
        <div className={styles.col1L}>
          <h2>100% SQL</h2>
          <p>
            <K/> has been specifically created to generate <strong>100% SQL queries.</strong>
            <br />
            <br />
            Forget about manually writing each query and dealing with potential errors.
            <br />
            <br />
            <strong>Simplify</strong> your work and <strong>save time</strong> by letting our tool take care of generating the SQL queries necessary for your database operations.
            {/* With functions geared to follow the same sequence as an <strong>SQL query</strong>, you'll be surprised how quickly you can master this tool.
            <br />
            <br />
            From installation to configuration, every step has been made so that you can use it without <strong>any difficulties.</strong> */}
          </p>
        </div>
        <div className={styles.col2L}>
          <img src="img/100sql.png" className={styles.codeImage} />
        </div>
      </div>
    </div>
  );
}

