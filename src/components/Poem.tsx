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
        <h2>Title</h2>
        <h3>Poem</h3>
        <h4>Humanlist</h4>
    </PoemContainer>
  )
}

export default Poem