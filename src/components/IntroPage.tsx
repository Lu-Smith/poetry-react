import React, { useRef } from 'react';

const IntroPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <>
      <canvas ref={canvasRef}  id="canvas1"></canvas>
      <h2>Welcome to the <span>💗</span> of <span>Scottish Poetry</span> - welcome home.</h2>
    </>
  )
}

export default IntroPage