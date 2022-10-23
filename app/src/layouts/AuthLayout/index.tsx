import React from 'react';

import styles from './index.module.scss';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.window}>{children}</div>
    </div>
  );
};

export default AuthLayout;
