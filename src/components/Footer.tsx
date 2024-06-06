import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #ffffff;
  color: #53a8b6;
  padding: 20px;
  border-top: 3px solid #53a8b6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  text-align: center;
  width: 100vw;
  z-index: 99;
`;

const StyledLink = styled.a`
  color: #5585b5;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #53a8b6;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h3>
        Coded by{' '}
        <StyledLink
          href='https://www.lunasmithart.com/'
          target='_blank'
        >
          Luna Smith
        </StyledLink>
        {' '}-{' '}
        <StyledLink
          href='https://github.com/Lu-Smith/poetry-react'
          target='_blank'
        >
          GitHub
        </StyledLink>
        .
      </h3>
    </FooterContainer>
  )
}

export default Footer