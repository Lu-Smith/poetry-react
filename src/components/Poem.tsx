import React from 'react';
import styled from 'styled-components';

interface Props {
    mode: boolean,
    poem: {
      title: string;
      author: string;
      lines: string[];
  };
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
  position: relative;
  top: 100px;
  padding: 40px 20px;

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

const Line = styled.h3`
  margin: 0;
  text-align: center;
`;

const Poem: React.FC<Props> = ({mode, poem}) => {

  return (
    <PoemContainer className={mode ? "light" : ""}>
        <h2>{poem.title}</h2>
        <br/>
        {poem.lines.map((line: string, index: number) => (
          <Line key={index}>{line}</Line>
        ))}
        <h4>{poem.author}</h4>
    </PoemContainer>
  )
}

export default Poem