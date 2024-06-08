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

`;

const MainPage: React.FC<Props> = ({mode, toggleHome}) => {
  return (
    <PoemsContainer>
      <ButtonStyle className={mode ? "light home" : "home"} onClick={toggleHome}>
        <span className="material-symbols-outlined">
          home
        </span>
      </ButtonStyle>
        {Object.keys(poems).map(poemKey => (
          <Poem key={poemKey} mode={mode} poem={poems[poemKey]} />
        ))}
    </PoemsContainer>
  )
}

export default MainPage