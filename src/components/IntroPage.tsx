import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particle, { Mouse } from '../assets/Particle';
import MainPage from './MainPage';
import Intro from './Intro';
import styled from 'styled-components';

interface Props {
  mode: boolean,
  toggleHome: () => void,
  poems: boolean,
}

const IntroPageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;

  .mainContainer {
    height: 100%;
    z-index: 99;
    text-align: center;
    margin-top: 40px;

    button {
    margin-top: 80px;
    }
  }
`;

const pageVariants = {
  initial: {
    opacity: 0,
    rotate: 90,
    transformOrigin: 'top right',
  },
  in: {
    opacity: 1,
    rotate: 0,
    transformOrigin: 'top right',
  },
  out: {
    opacity: 0,
    rotate: -90,
    transformOrigin: 'top right'
  },
};

const pageTransition = {
  type: 'spring',
  stiffness: 40,
  damping: 12,
};

const IntroPage: React.FC<Props> = ({mode, toggleHome, poems}) => {
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
  }, [particlesArray, mode]);

  

 
  return (
    <IntroPageContainer>
      <canvas ref={canvasRef}  id="canvas1" className={mode ? "light" : ""}></canvas>
      <AnimatePresence mode="wait">
        {poems ? (
          <motion.div className='mainContainer'
            key="main"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <MainPage mode={mode} toggleHome={toggleHome} />
          </motion.div>
        ) : (
          <div className='mainContainer'>
            <Intro mode={mode} toggleHome={toggleHome} />
          </div>
        )}
      </AnimatePresence>
    </IntroPageContainer>
  )
}

export default IntroPage