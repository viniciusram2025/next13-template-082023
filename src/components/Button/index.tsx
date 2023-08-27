'use client';

import * as S from './styles';

export type ButtonProps = {
  children: string;
};

export const Button = ({ children }: ButtonProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
