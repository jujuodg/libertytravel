'use client';

import Select, { SingleValue } from 'react-select';

type AirportOption = {
  value: string;
  label: string;
};

export default function AirportSelect({
  value,
  onChange,
  options,
  placeholder,
  inputId,
}: {
  value: AirportOption | null;
  onChange: (option: SingleValue<AirportOption>) => void;
  options: AirportOption[];
  placeholder: string;
  inputId: string;
}) {
  return (
    <Select
      inputId={inputId}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isSearchable
    />
  );
}
