import React from 'react';
import styled from 'styled-components';

interface Props {
    mode: boolean,
}

const PoemContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 786px) {
    flex-direction: column;
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