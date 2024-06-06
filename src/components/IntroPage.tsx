import React, { useEffect, useRef, useState } from 'react';
import Particle, { Mouse } from '../assets/Particle';

const IntroPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particlesArray, setParticlesArray] = useState<Particle[]>([]);
  const [color, setColor] = useState('#53a8b6')
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

    const handleClick = (event: MouseEvent) => {
      mouse.current.x = event.x;
      mouse.current.y = event.y;
      setParticlesArray((prev) => [
        ...prev,
        new Particle(mouse.current, color),
      ]);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.x;
      mouse.current.y = event.y;
      setParticlesArray((prev) => [
        ...prev,
        new Particle(mouse.current, color),
      ]);
    };

    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
    
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      if (mouse.current.x && mouse.current.y) {
        if (mouse.current.x < mouse.current.y) {
            setColor('#53a8b6')
        } else if (mouse.current.x > mouse.current.y * 2.3) {
            setColor('#5585b5')
        } else {
          setColor('#ffffff')
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();
  }, [particlesArray]);

  

 
  return (
    <>
      <canvas ref={canvasRef}  id="canvas1"></canvas>
      <h2>Welcome to the <span>💙</span> of <span>Scottish Poetry</span>. Welcome home.</h2>
    </>
  )
}

export default IntroPage