import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { ButtonStyle } from '../styles/Button';

interface Props {
    mode: boolean,
    toggleHome: () => void,
}

const TitleContainer = styled.div`
  width: 100%;
  height: 30vh;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10%;

  @media screen and (max-width: 786px) {
    flex-direction: column;
  }
`;

const Intro: React.FC<Props> = ({mode, toggleHome}) => {
  return (
    <>
     <TitleContainer className={mode ? "light" : ""}>
        <motion.h2 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}>
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
      <ButtonStyle className={mode ? "light" : ""} onClick={toggleHome}>
        Poems
      </ButtonStyle>
    </>
  )
}

export default Intro