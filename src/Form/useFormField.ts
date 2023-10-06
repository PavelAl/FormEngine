import { useContext } from 'react';

import { FormContext } from './Form.context';

type Output<FieldValue> = {
  value?: FieldValue;
  onChange: (newValue: FieldValue) => void;
};

export const useFormFieldValue = <FieldValue>(name: string): Output<FieldValue> => {
  const { value = {}, onChange } = useContext(FormContext);

  const fieldValue = value[name as keyof typeof value] as FieldValue;
  const setValue = (newValue: FieldValue) => {
    onChange({ ...value, [name]: newValue });
  };

  return { value: fieldValue, onChange: setValue };
};
