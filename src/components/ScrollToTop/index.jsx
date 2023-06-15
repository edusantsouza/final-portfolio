import React, { useState, useEffect } from 'react'
import './index.css'

const ScrollToTop = () => {

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    showTopBtn &&
    <div className='scrollToTop-btn container' onClick={handleToTop}>
      <i className='bx bx-up-arrow-alt arrowUp-icon'></i>
    </div>
  )
}

export default ScrollToTop