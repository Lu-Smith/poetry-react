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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 40px;
    margin-bottom: 100px;
    padding-bottom: 70px;
    background: none;
    
    div {
      width: 50vw;
      margin: 0 auto;
     
      @media screen and (max-width: 1200px) {
        width: 60vw;
      }

      @media screen and (max-width: 786px) {
        width: 80vw;
      }

      @media screen and (max-width: 480px) {
        width: 100vw;
      }
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