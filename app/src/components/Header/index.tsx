import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './index.module.scss';
import logo from '../../../public/Logo.svg';

import { deepOrange } from '@mui/material/colors';
import { Avatar } from '@mui/material';

const headerLinks = [
  { id: 1, linkName: 'Home', path: '/' },
  { id: 2, linkName: 'Find Work', path: '/' },
  { id: 3, linkName: 'Find Employee', path: '/' },
  { id: 4, linkName: 'About us', path: '/' },
];
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navigationBar}>
        <div>
          <Image
            src={logo}
            width={150}
            height={120}
            alt='logo'
          />
        </div>
        <nav>
          <ul className={styles.nav}>
            {headerLinks.map((i) => (
              <li
                key={i.id}
                className={styles.navLink}>
                <Link href={i.path}>
                  <a className={styles.navLink}>{i.linkName}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt='Remy Sharp'>
        B
      </Avatar>
    </header>
  );
};

export default Header;
