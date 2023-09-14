import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.gray[900]};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  outline: none;
  border: 0;
  appearance: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  transition: outline 50ms;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  ${({ theme, error }) => error && css`
      color: ${theme.colors.danger.main};
      outline: none !important;
      border: 2px solid ${theme.colors.danger.main};
  `}
`;
