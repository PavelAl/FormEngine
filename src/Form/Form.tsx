import { ReactNode } from 'react';

import { FormContext } from './Form.context';

export type FormProps<FormValue = object> = {
  value: FormValue;

  onChange: (newValue: FormValue) => void;
};

type ChildrenProps = {
  children: ReactNode;
};

export function Form<FormValue>(props: FormProps<FormValue> & ChildrenProps) {
  const { children, ...formProps } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <FormContext.Provider value={formProps}>{children}</FormContext.Provider>
    </div>
  );
}
