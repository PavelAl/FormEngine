import { FC } from 'react';

import { useFormFieldValue } from './useFormField';

type Props = {
  name: string;
};

export const Field: FC<Props> = props => {
  const { name } = props;

  const { value, onChange } = useFormFieldValue<string>(name);

  return <input value={value} onChange={e => onChange(e.target.value)} />;
};
