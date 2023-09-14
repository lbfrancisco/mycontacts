import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backdrop-filter: blur(7px);
  background-color: rgba(0,0,0,0.6);
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 4px;
  padding: 24px;

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
    margin-bottom: 8px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;

  button {
    border: 0;
    padding: 16px;
    border-radius: 4px;
  }

  button.cancel {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`;
