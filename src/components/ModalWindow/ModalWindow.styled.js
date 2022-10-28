import styled from 'styled-components';

const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalStyled = styled.div`
  width: 80vw;
  height: 70vh;
`;

export { OverlayStyled, ModalStyled };
