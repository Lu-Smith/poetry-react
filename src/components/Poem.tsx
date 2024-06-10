import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

interface Props {
    mode: boolean,
    poem: {
      title: string;
      author: string;
      lines: string[];
  };
}

const PoemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  top: 50px;
  padding: 60px 20px;
  border-radius: 5px;
  margin: 0;

  &.light {
    background-color: rgba(250, 250, 250, 0.8);

    h2 {
      color: black;
    }
  }

  h2 {
    color: #F3AD61;
    font-style: italic;
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
             <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Line>{line}</Line>
            </motion.div>
          ))}
          <h4>{poem.author}🪶</h4>
      </PoemContainer>
  )
}

export default Poem