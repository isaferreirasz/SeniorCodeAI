'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Valores de movimento para o X e Y do mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Configuração de mola (spring) para dar o efeito "suave/atrasado" ao seguir o mouse
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); // Desconto de metade da largura (32px / 2) para centralizar
      mouseY.set(e.clientY - 16); // Desconto de metade da altura
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
    className="fixed top-0 left-0 pointer-events-none z-50 invisible md:visible"
    style={{
      x: cursorX,
      y: cursorY,
    }}
  >
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'rotate(-15deg)' }} // Leve inclinação charmosa de cursor
    >
      <defs>
        {/* Gradiente roxo lindo combinando com o Senior Code */}
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" /> {/* Roxo mais intenso */}
          <stop offset="100%" stopColor="#a855f7" /> {/* Roxo mais claro */}
        </linearGradient>
        
        {/* Sombra para dar profundidade e destacar o cursor do fundo */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodOpacity="0.3"/>
        </filter>
      </defs>

      {/* O desenho exato da seta */}
      <path
        d="M10 10 L45 80 L58 52 L86 45 Z"
        fill="url(#purpleGradient)"
        filter="url(#shadow)"
        stroke="white"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  </motion.div>
    );
}