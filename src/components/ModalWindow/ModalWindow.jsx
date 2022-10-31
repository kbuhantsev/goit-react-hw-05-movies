import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyled, OverlayStyled } from './ModalWindow.styled';
import PropTypes from 'prop-types';

const container = document.getElementById('modal-root');

export default function ModalWindow({ onClose, children }) {
  const onEscapePress = useCallback(
    evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', onEscapePress);
    return () => {
      window.removeEventListener('keydown', onEscapePress);
    };
  }, [onEscapePress]);

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

ModalWindow.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};
