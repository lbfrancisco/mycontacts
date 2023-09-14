import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 700;

  strong {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  a {
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 6px;

    transition: all .2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      border: 0;
      background: transparent;

      span {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .contact-name {
      small {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary.dark};
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        border-radius: 4px;
        padding: 4px;
        margin-left: 8px;
      }
    }

    > span {
      color: ${({ theme }) => theme.colors.gray[200]};
      font-size: 14px;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      margin-left: 8px;
      border: 0;
    }
  }

  & + & {
    margin-top: 16px;
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;

  input {
    width: 100%;
    height: 50px;
    border: 0;
    padding: 16px;
    border-radius: 24px;
    background-color: #fff;

    outline-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }

  }
`;
