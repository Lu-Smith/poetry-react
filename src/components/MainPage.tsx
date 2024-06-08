import React from 'react';
import { ButtonStyle } from '../styles/Button';
import Poem from './Poem';

interface Props {
    mode: boolean,
    toggleHome: () => void,
}

const MainPage: React.FC<Props> = ({mode, toggleHome}) => {
  return (
    <>
      <ButtonStyle className={mode ? "light home" : "home"} onClick={toggleHome}>
        <span className="material-symbols-outlined">
          home
        </span>
      </ButtonStyle>
      <Poem mode = {mode} />
    </>
    
  )
}

export default MainPage