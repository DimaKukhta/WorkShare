import React from 'react';
import Image from 'next/image';

import styles from './index.module.scss';
import heroPic from '../../../public/hero-page.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Typography } from '@mui/material';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            priority
            src={heroPic}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            alt='hero image example'
          />
        </div>
        <div className={styles.heroContent}>
          <Header />
          <Typography
            className={styles.heroMotto}
            variant={'h1'}>
            Save your fingers and time. Find yor worker here
          </Typography>
        </div>
      </div>
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
