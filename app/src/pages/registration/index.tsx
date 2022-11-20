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

interface IRegistrationFormInput {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    firstName: yup.string().required('First name is a required field'),
    lastName: yup.string().required('Second name is a required field'),
    phoneNumber: yup.string().required('Phone number is a required field'),
    email: yup.string().email('Email must be valid email type').required('Email is a required field'),
    password: yup.string().required('Password is a required field').min(8, 'Password min length is 8 symbols'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required();

const Registration: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<IRegistrationFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<IRegistrationFormInput> = (data) => {
    console.log(data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <AuthLayout>
      <AuthWindow>
        <form
          className={styles.authContainer}
          onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputsContainer}>
            <TextInput
              control={control}
              name='firstName'
              label='First Name'
              fullWidth={true}
              placeholder='Please enter your first name'
            />
            <TextInput
              control={control}
              name='lastName'
              label='Last Name'
              fullWidth={true}
              placeholder='Please enter your second name'
            />
            <TextInput
              control={control}
              name='phoneNumber'
              label='Phone number'
              fullWidth={true}
              placeholder='Please enter your phone number'
            />
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
            <TextInput
              control={control}
              name='confirmPassword'
              label='Confirm password'
              fullWidth={true}
              type='password'
              placeholder='Please enter your password again'
            />
          </div>
          <div className={styles.buttonContainer}>
            <LoadingButton
              variant='contained'
              loading={isLoading}
              fullWidth={true}
              type='submit'>
              Create a new account
            </LoadingButton>
          </div>
        </form>
      </AuthWindow>
    </AuthLayout>
  );
};

export default Registration;
