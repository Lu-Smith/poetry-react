import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: black;
  color: pink;
  padding: 20px;
  border-top: 2px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  text-align: center;
`;

const StyledLink = styled.a`
  color: red;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: lightcoral;
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