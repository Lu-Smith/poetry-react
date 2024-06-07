import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

interface Props {
  mode: boolean,
}

const FooterContainer = styled.div`
  background-color: #ffffff;
  color: #53a8b6;
  padding: 20px;
  border-top: 3px solid #53a8b6;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  z-index: 99;
  gap: 5px;

  &.light {
    color: rgb(181, 86, 86);
    border-top: 3px solid rgb(181, 86, 86);
  }
`;

const StyledLink = styled.a`
  color: #5585b5;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #F3AD61;
  }

  .light &:hover {
    color: #9d2214;
  }
`;

const Footer: React.FC<Props> = ({mode}) => {
  return (
    <FooterContainer className={mode ? "light" : ""}>
      <motion.h3
        initial={{ translateY: 100, scale: 0.5 }}
        animate={{ translateY: 0, scale: 1 }}
        transition={{ duration: 2 }}
      >
        Coded by{' '}
      </motion.h3>
      <motion.h3
        initial={{ translateY: 100, scale: 0.5 }}
        animate={{ translateY: 0, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <StyledLink href='https://www.lunasmithart.com/' target='_blank'>
          <motion.div
            initial={{ translateY: 0, scale: 1 }}
            whileHover={{ translateY: -15, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            Luna Smith
          </motion.div>
        </StyledLink>
      </motion.h3>
      <motion.h3
        initial={{ translateY: 100, scale: 0.5 }}
        animate={{ translateY: 0, scale: 1 }}
        transition={{ duration: 2 }}
      >
        {' '}-{' '}
      </motion.h3>
      <motion.h3
        initial={{ translateY: 100, scale: 0.5 }}
        animate={{ translateY: 0, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <StyledLink href='https://github.com/Lu-Smith/poetry-react' target='_blank'>
          <motion.div
            initial={{ translateY: 0, scale: 1 }}
            whileHover={{ translateY: -15, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            GitHub
          </motion.div>
        </StyledLink>
      </motion.h3>
      <motion.h3
        initial={{ translateY: 100, scale: 0.5 }}
        animate={{ translateY: 0, scale: 1 }}
        transition={{ duration: 2 }}
      >
        .
      </motion.h3>
    </FooterContainer>
  )
}

export default Footer