
import React, { useRef, useEffect } from 'react';

const NetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create finer grid lines similar to the provided background image
    const drawGridPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw a spherical grid pattern
      const centerX = canvas.width * 0.7;
      const centerY = canvas.height * 0.5;
      const maxRadius = canvas.width * 0.5;
      
      // Draw longitudinal lines
      ctx.strokeStyle = 'rgba(78, 236, 214, 0.15)';
      ctx.lineWidth = 0.5;
      
      // Draw longitude lines (vertical)
      for (let i = 0; i < 20; i++) {
        const angle = (Math.PI * i) / 10;
        ctx.beginPath();
        
        for (let j = 0; j < 100; j++) {
          const radius = (maxRadius * j) / 100;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle) * 0.6; // Flatten for perspective
          
          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }
      
      // Draw latitude lines (horizontal)
      for (let i = 1; i < 10; i++) {
        ctx.beginPath();
        const radius = (maxRadius * i) / 10;
        
        for (let j = 0; j < 100; j++) {
          const angle = (Math.PI * 2 * j) / 100;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle) * 0.6; // Flatten for perspective
          
          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }
    };
    
    // Initial draw
    drawGridPattern();
    
    // No animation needed as it's a static grid
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 opacity-70"
    />
  );
};

export default NetworkAnimation;
