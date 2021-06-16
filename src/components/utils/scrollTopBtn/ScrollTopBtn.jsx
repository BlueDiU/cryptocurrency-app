import React, { useEffect, useState } from 'react';
import './ScrollTopBtn.css';
import { useWindowScroll } from 'react-use';

function ScrollTopBtn() {
  const { y } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (y > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [y]);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  if (!visible) {
    return false;
  }

  return (
    <button onClick={scrollToTop} className="scroll-top-btn">
      &#11014;
    </button>
  );
}

export default ScrollTopBtn;
