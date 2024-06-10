import React from 'react';
import { ButtonStyle } from '../styles/Button';
import Poem from './Poem';
import poems from '../assets/poems';
import styled from 'styled-components';

interface Props {
    mode: boolean,
    toggleHome: () => void,
}

const PoemsContainer = styled.div`
    width: 99vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 40px;
    overflow: hidden;
    margin-bottom: 200px;

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
        {Object.keys(poems).map((poemKey) => (
            <Poem key={poemKey} mode={mode} poem={poems[poemKey]} />
          ))}
      </PoemsContainer>    
    </>
  )
}

export default MainPage