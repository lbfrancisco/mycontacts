import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 24px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    text-decoration: none;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: 700;
    }

    img {
      transform: rotate(-90deg);
    }
  }

  h1 {
      color: ${({ theme }) => theme.colors.secondary.dark};
      margin-top: 8px;
    }
`;
