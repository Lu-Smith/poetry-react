import React, { useEffect, useRef, useState } from 'react';
import Particle from '../assets/Particle';

interface Mouse {
  x: number | undefined;
  y: number | undefined;
}

const IntroPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particlesArray, setParticlesArray] = useState<Particle[]>([]);
  const hueRef = useRef(0);
  const mouse = useRef<Mouse>({ x: undefined, y: undefined });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const addParticles = (event: MouseEvent) => {
      mouse.current.x = event.x;
      mouse.current.y = event.y;
      for (let i = 0; i < 10; i++) {
        setParticlesArray(prevParticles => [
          ...prevParticles,
          new Particle(mouse.current, hueRef.current),
        ]);
      }
    };

    const handleClick = (event: MouseEvent) => addParticles(event);

    canvas.addEventListener('click', handleClick);
    
  }, []);


  return (
    <>
      <canvas ref={canvasRef}  id="canvas1"></canvas>
      <h2>Welcome to the <span>💗</span> of <span>Scottish Poetry</span> - welcome home.</h2>
    </>
  )
}

export default IntroPage