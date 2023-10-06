import { createContext } from 'react';

export type FormContextValue<FormValue> = {
  value: FormValue;
  onChange: (newValue: FormValue) => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormContext = createContext<FormContextValue<any>>({
  value: {},
  onChange: () => null
});
