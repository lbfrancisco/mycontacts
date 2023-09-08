import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.secondary.light};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  outline: none;
  border: 0;

  transition: outline 50ms;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary.light};
  }
`;
