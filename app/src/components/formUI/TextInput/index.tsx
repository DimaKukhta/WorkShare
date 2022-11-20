import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

export type ITextInputProps = TextFieldProps & {
  name: string;
  control: any; // Control;
  props?: TextFieldProps;
};

function TextInput({ name, control, ...props }: ITextInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          error={Boolean(error)}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default TextInput;
