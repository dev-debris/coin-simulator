import {ChangeEventHandler, useState} from 'react';

function NumberInput({onChange}: NumberInputProp) {
  const [value, setValue] = useState('');

  const onChangeValue: ChangeEventHandler<HTMLInputElement> = e => {
    const separated = e.target.value.replace(/[^0-9.]/g, '').split('.');

    if (separated.length > 2) {
      return;
    }

    let newValue = '';
    const [integer, decimal] = separated;

    if (integer) {
      newValue += Number(integer).toLocaleString();
    }

    if (decimal !== undefined) {
      newValue += '.';

      if (decimal) {
        newValue += decimal;
      }
    }

    setValue(newValue);
    onChange(newValue ? Number(newValue.replace(/\D/g, '')) : null);
  };

  return <input type="text" value={value} onChange={onChangeValue} />;
}

export default NumberInput;
