import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for custom hover data attributes
      const cursorTextAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      
      if (cursorTextAttr) {
        setCursorText(cursorTextAttr);
        setIsHovered(true);
      } else if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] custom-cursor flex items-center justify-center rounded-full mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovered ? (cursorText ? 40 : 20) : 8),
        y: mousePosition.y - (isHovered ? (cursorText ? 40 : 20) : 8),
        width: isHovered ? (cursorText ? 80 : 40) : 16,
        height: isHovered ? (cursorText ? 80 : 40) : 16,
        backgroundColor: cursorText ? '#C7F000' : (isHovered ? '#FFFFFF' : '#C7F000'),
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 28,
        mass: 0.5,
      }}
    >
      {cursorText && (
        <span className="text-[10px] font-extrabold tracking-wider text-dark-bg uppercase px-1 text-center font-sans">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};
