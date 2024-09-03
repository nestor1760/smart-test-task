import { useMemo } from 'react';
import { TFilterProps, TUser } from '../types/types';

export const useFilter = ({ inputValue, array }: TFilterProps): TUser[] => {
  const filteredList = useMemo(() =>
    (!inputValue)
      ? array
      : array.filter(user =>
        user.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) ||
        user.username.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) ||
        user.phone.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) ||
        user.email.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
      ), [inputValue, array]);

  return filteredList;
}