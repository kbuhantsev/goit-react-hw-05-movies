import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 50px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: ${p => p.theme.colors.accent};
  animation: ${float} 2s ease-in-out infinite;
`;
