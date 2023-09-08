import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  outline: none;
  border: 0;
  font-weight: bold;

  transition: background-color .2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary.lighter};
    cursor: not-allowed;
  }
`;
