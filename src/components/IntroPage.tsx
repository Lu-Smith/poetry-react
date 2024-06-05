import React, { useEffect, useRef, useState } from 'react';
import Particle from '../assets/Particle';

interface Mouse {
  x: number | undefined;
  y: number | undefined;
}

const IntroPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particlesArray, setParticlesArray] = useState<Particle[]>([]);
  const [hue, setHue] = useState(0);
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
      for (let i = 0; i < 10; i++) {
        setParticlesArray((prev) => [...prev, new Particle(mouse.current, hue)]);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.x;
      mouse.current.y = event.y;
      for (let i = 0; i < 10; i++) {
        setParticlesArray((prev) => [...prev, new Particle(mouse.current, hue)]);
      }
    };

    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
    
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles(ctx);
      setHue((prevHue) => prevHue + 2);
      requestAnimationFrame(animate);
    };

    animate();
  }, [particlesArray]);

  const handleParticles = (ctx: CanvasRenderingContext2D) => {
    particlesArray.forEach((particle, index) => {
      particle.update();
      particle.draw(ctx);

      for (let j = index; j < particlesArray.length; j++) {
        const dx = particle.x - particlesArray[j].x;
        const dy = particle.y - particlesArray[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 0.2;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
          ctx.stroke();
          ctx.closePath();
        }
      }

      if (particle.size <= 0.3) {
        setParticlesArray((prev) => prev.filter((_, i) => i !== index));
      }
    });
  };



  return (
    <>
      <canvas ref={canvasRef}  id="canvas1"></canvas>
      <h2>Welcome to the <span>💗</span> of <span>Scottish Poetry</span> - welcome home.</h2>
    </>
  )
}

export default IntroPage