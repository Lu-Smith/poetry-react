import React, { useEffect, useRef } from 'react';
import Effect from '../assets/Effect';

const IntroPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const effect = new Effect(canvas, ctx);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.render();
      requestAnimationFrame(animate);
    };

    animate();
    
  }, []);


  return (
    <>
      <canvas ref={canvasRef}  id="canvas1"></canvas>
      <h2>Welcome to the <span>💗</span> of <span>Scottish Poetry</span> - welcome home.</h2>
    </>
  )
}

export default IntroPage