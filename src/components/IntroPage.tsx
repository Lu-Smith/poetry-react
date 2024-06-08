import React, { useEffect, useRef, useState } from 'react';
import Particle, { Mouse } from '../assets/Particle';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { ButtonStyle } from '../styles/Button';

interface Props {
  mode: boolean,
}

const TitleContainer = styled.div`
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 786px) {
    flex-direction: column;
  }
`;


const IntroPage: React.FC<Props> = ({mode}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particlesArray, setParticlesArray] = useState<Particle[]>([]);
  const [color, setColor] = useState('#53a8b6')
  const mouse = useRef<Mouse>({ x: undefined, y: undefined });

  function handleParticle(ctx: CanvasRenderingContext2D) {
    for ( let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw(ctx);
        for ( let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if ( distance < 200) {
                ctx.beginPath();
                ctx.strokeStyle = particlesArray[i].color;
                ctx.lineWidth = 1;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}


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
        setParticlesArray((prev) => [
          ...prev,
          new Particle(mouse.current, color),
        ]);
      }
      
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
      handleParticle(ctx);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      if (mouse.current.x && mouse.current.y) {
        if (mode) {
          if (mouse.current.x < mouse.current.y) {
            setColor('rgb(181, 86, 86)')
          } else if (mouse.current.x > mouse.current.y * 2.3) {
            setColor('#5585b5')
          } else {
            setColor('#ffffff')
          }
        } else {
          if (mouse.current.x < mouse.current.y) {
            setColor('#53a8b6')
          } else if (mouse.current.x > mouse.current.y * 2.3) {
              setColor('#5585b5')
          } else {
            setColor('#ffffff')
          }
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();
  }, [particlesArray]);

  

 
  return (
    <>
      <canvas ref={canvasRef}  id="canvas1" className={mode ? "light" : ""}></canvas>
      <TitleContainer className={mode ? "light" : ""}>
        <motion.h2 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
          Welcome to the 
        </motion.h2>
        <motion.div 
          initial={{ scale: 0.5 }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
          className='heart'>
          🧡
        </motion.div> 
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}>
          of 
          <span> Scottish Poetry 🪶</span>
        </motion.h2>
      </TitleContainer>
      <motion.h2 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1 }}>
        Welcome home🪶
      </motion.h2>
      <ButtonStyle className={mode ? "light" : ""}>
        Poems
      </ButtonStyle>
    </>
  )
}

export default IntroPage