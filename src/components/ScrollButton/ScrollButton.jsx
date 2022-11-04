// import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from './ScrollButton.styled';

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(event => {
        toggleVisible(event);
      }, 500)
    );

    return () => {
      window.removeEventListener('scroll', toggleVisible());
    };
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrolled > clientHeight) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </Button>
  );
}
