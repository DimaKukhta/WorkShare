import React from 'react';
import type { NextPage } from 'next';
import { Button } from '@mui/material';
// import LoadingButton from '@mui/lab/LoadingButton';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthLayout from '../../layouts/AuthLayout';
import styles from '../../styles/pages/login.module.scss';
import TextInput from '../../components/formUI/TextInput';
import yup from '../../utils/yup';

interface ILoginFormInput {
  login: string;
  password: string;
}

const schema = yup
  .object({
    login: yup.string().required().min(4, 'Login min length is 4 simbols'),
    password: yup.string().required().min(6, 'Password min length is 6 symbols'),
  })
  .required();

const Login: NextPage = () => {
  const { control, handleSubmit } = useForm<ILoginFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <form
        className={styles.loginContentContainer}
        onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.label}>SIGN IN</p>
        <div className={styles.inputsContainer}>
          <TextInput
            control={control}
            name='login'
            label='Login'
            fullWidth={true}
            placeholder='Please enter your email address'
          />
          <TextInput
            control={control}
            name='password'
            label='Password'
            fullWidth={true}
            placeholder='Please enter your password'
          />
        </div>
        <div className={styles.buttonsContainer}>
          <Button
            variant='contained'
            fullWidth={true}
            type='submit'>
            Login
          </Button>
          {/* <LoadingButton
            loading
            variant='outlined'>
            Submit
          </LoadingButton> */}
          <Button fullWidth={true}>Sign UP</Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
