import styled, { css } from 'styled-components';

export const Button = styled.button`
  height: 52px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  outline: 0;
  border: 0;
  font-weight: bold;

  transition: background-color .2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    cursor: not-allowed;
  }

  ${({ theme, danger }) => danger && css`
    background-color: ${theme.colors.danger.main};

    &:hover {
      background-color: ${theme.colors.danger.light};
    }

    &:active {
      background-color: ${theme.colors.danger.dark};
    }
  `}
`;
