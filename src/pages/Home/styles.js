import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ hasError }) => (hasError ? 'flex-end' : 'space-between')};

  font-size: 700;

  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;

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

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 16px;

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

    img {
      transform: rotate(${({ orderBy }) => (orderBy === 'asc' ? '0deg' : '180deg')});
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

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  .details {
    margin-left: 24px;

    strong {
      display: block;
      font-size: 22px;
      line-height: 27.72px;
      margin-bottom: 8px;
      color: ${({ theme }) => theme.colors.danger.main};
    }
  }
`;
