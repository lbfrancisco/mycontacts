import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 64px;
  text-align: center;

  img {
    margin-bottom: 16px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  span {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
  }
`;
