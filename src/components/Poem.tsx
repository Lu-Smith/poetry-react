import React from 'react';
import styled from 'styled-components';

interface Props {
    mode: boolean,
}

const PoemContainer = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);

  &.light {
    background-color: rgba(250, 250, 250, 0.8);
  }

  @media screen and (max-width: 120px) {
    width: 80%;
  }

  @media screen and (max-width: 786px) {
    width: 90%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Poem: React.FC<Props> = ({mode}) => {
  return (
    <PoemContainer className={mode ? "light" : ""}>
        <h2>The Duel Dance</h2>
        <br/>
        <h3>Tolerance is a wee brave heart,</h3>
        <h3>A fool’s wisdom, a keen-edged dart.</h3>
        <h3>It’s laughing through a tear-stained eye,</h3>
        <h3>A thorn that helps the rose grow high.</h3>
        <h3>Tolerance is cruel kindness,</h3>
        <h3>A jest that heals and hurts.</h3>
        <h3>It’s peace among the warring sharks,</h3>
        <h3>Where the meek rise from the dirt.</h3>
        <h3>Tolerance is the comedy of strife,</h3>
        <h3>The dance of love and pain.</h3>
        <h3>A fire that sometimes fuels the fight,</h3>
        <h3>Yet soothes the heart again.</h3>
        <h4>Humanlist</h4>
    </PoemContainer>
  )
}

export default Poem