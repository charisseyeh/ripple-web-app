import React, { useEffect, useState } from 'react';
import './RippleEffect.css'; // Assuming a CSS file for styling

const RippleEffect = () => {
  const [sizesLog, setSizesLog] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const rippleContainer = document.querySelector('.ripple-background');
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      // Randomize the position of the ripple
      const size = Math.random() * 100;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${Math.random() * (rippleContainer.offsetWidth - size)}px`;
      ripple.style.top = `${Math.random() * (rippleContainer.offsetHeight - size)}px`;
      rippleContainer.appendChild(ripple);
      setSizesLog(prevSizes => [...prevSizes, size]); // Update state with new size
      setTimeout(() => {
        ripple.remove();
        setSizesLog(prevSizes => prevSizes.slice(1)); // Remove size from state when ripple is removed
      }, 4000); // increased timeout duration to ensure animation is visible
    }, 1000); // new ripple every second

    return () => clearInterval(interval); // cleanup on component unmount
  }, []);

  return (
    <div className="ripple-background">
      <div className="sizes-log">
        {sizesLog.map((size, index) => (
          <div key={index}>Ripple size: {size}px</div>
        ))}
      </div>
    </div>
  );
};

export default RippleEffect;
