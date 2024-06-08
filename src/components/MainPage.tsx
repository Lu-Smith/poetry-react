import React from 'react';
import { ButtonStyle } from '../styles/Button';
import Poem from './Poem';
import poems from '../assets/poems';

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
        {Object.keys(poems).map(poemKey => (
          <Poem key={poemKey} mode={mode} poem={poems[poemKey]} />
        ))}
    </>
  )
}

export default MainPage