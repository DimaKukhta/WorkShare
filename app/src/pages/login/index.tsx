import React, { useState } from 'react';
import type { NextPage } from 'next';
import { LoadingButton } from '@mui/lab';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthLayout from '../../layouts/AuthLayout';
import styles from '../../styles/pages/auth.module.scss';
import TextInput from '../../components/formUI/TextInput';
import yup from '../../utils/yup';
import AuthWindow from '../../components/AuthWindow';

interface ILoginFormInput {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email('Email must be valid email type').required('Email is a required field'),
    password: yup.string().required('Password is a required field').min(8, 'Password min length is 8 symbols'),
  })
  .required();

const Login: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<ILoginFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
    console.log(data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <AuthLayout>
      <AuthWindow isLogin>
        <form
          className={styles.authContainer}
          onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputsContainer}>
            <TextInput
              control={control}
              name='email'
              label='Email'
              fullWidth={true}
              placeholder='Please enter your email address'
            />
            <TextInput
              control={control}
              name='password'
              label='Password'
              fullWidth={true}
              type='password'
              placeholder='Please enter your password'
            />
          </div>
          <div className={styles.buttonContainer}>
            <LoadingButton
              loading={isLoading}
              fullWidth={true}
              type='submit'
              variant='contained'>
              Login
            </LoadingButton>
          </div>
        </form>
      </AuthWindow>
    </AuthLayout>
  );
};

export default Login;
