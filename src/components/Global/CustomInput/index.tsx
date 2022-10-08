import React from 'react';
import { isEmptyString } from '../../../utilities';
import * as S from './index.style';

interface IInput {
  title?: string;
  type: 'text' | 'password' | 'number' | 'password';
  value: string | number;
  placeholder?: string;
  id: string;
  errorMessage?: string;
  onChange: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}
const CustomInput = ({ title = '', id, errorMessage = '', placeholder = '', ...rest }: IInput) => {
  return (
    <S.CustomInput htmlFor={id}>
      {!isEmptyString(title) && <S.Title>{title}</S.Title>}
      <S.Input id={id} placeholder={placeholder} {...rest} isError={!isEmptyString(errorMessage)} />
      {!isEmptyString(errorMessage) && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.CustomInput>
  );
};

export default CustomInput;
