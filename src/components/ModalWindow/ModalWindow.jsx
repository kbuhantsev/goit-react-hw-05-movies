import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyled, OverlayStyled } from './ModalWindow.styled';

const container = document.getElementById('modal-root');

export default function ModalWindow({ onClose, children }) {
  const onEscapePress = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscapePress);
    return () => {
      window.removeEventListener('keydown', onEscapePress);
    };
  });

  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <OverlayStyled onClick={onBackdropClick}>
      <ModalStyled>{children}</ModalStyled>
    </OverlayStyled>,
    container
  );
}
