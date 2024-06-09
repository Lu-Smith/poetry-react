import React from 'react';
import { ButtonStyle } from '../styles/Button';
import Poem from './Poem';
import poems from '../assets/poems';
import styled from 'styled-components';
import { motion } from "framer-motion";

interface Props {
    mode: boolean,
    toggleHome: () => void,
}

const PoemsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 40px;
    overflow: scroll;
    margin-bottom: 100px;

    div {
      width: 60%;
      margin: 0 auto;
    }
`;

const MainPage: React.FC<Props> = ({mode, toggleHome}) => {
  return (
    <>
      <ButtonStyle className={mode ? "light home" : "home"} onClick={toggleHome}>
        <span className="material-symbols-outlined">
          home
        </span>
      </ButtonStyle>
      <PoemsContainer>
        {Object.keys(poems).map(poemKey => (
          <motion.div>
            <Poem key={poemKey} mode={mode} poem={poems[poemKey]} />
          </motion.div>
          ))}
      </PoemsContainer>
      <ButtonStyle className={mode ? "light scroll" : "scroll"} onClick={toggleHome}>
        <span className="material-symbols-outlined">
        stat_minus_2
        </span>
      </ButtonStyle>
    
    </>
  )
}

export default MainPage