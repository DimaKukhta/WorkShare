import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';
import logo from '../../../public/Logo.svg';
import Link from 'next/link';

export interface IAuthWindowProps {
  children: React.ReactNode;
  isLogin?: boolean;
}

function AuthWindow({ children, isLogin = false }: IAuthWindowProps) {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Image
          src={logo}
          width={200}
          height={160}
          alt='logo'
        />
        <div className={styles.text}>Save and multiply your time and money with us!</div>
        <div className={styles.content}>
          <span>{isLogin ? "Don't have an account?" : 'Do you already have an account?'} </span>
          <Link
            className={styles.link}
            href={isLogin ? '/registration' : '/login'}>
            {isLogin ? 'Create a new account!' : 'Login to your account!'}
          </Link>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.title}>{isLogin ? 'Login' : 'Registration'}</div>
        {children}
      </div>
    </div>
  );
}

export default AuthWindow;
