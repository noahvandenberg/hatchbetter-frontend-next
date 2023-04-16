import React from 'react';
import type { ChangeEvent } from 'react';

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type='text'
      placeholder='Search..'
      className='self-end w-7/12 px-3 py-1 border border-black rounded-md outline-none'
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchInput;
