import { FC } from 'react';

import { Form, FormProps } from '../Form';
import { User } from '../User';

import { AgeField, NameField } from './Fields';

export const UserForm: FC<FormProps<User>> = props => {
  return (
    <Form {...props}>
      <NameField />

      <AgeField />
    </Form>
  );
};
