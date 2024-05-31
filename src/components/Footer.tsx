import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #906387;
  color: #7dd87d;
  padding: 20px;
  border-top: 2px solid #7dd87d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  text-align: center;
  width: 100vw;
`;

const StyledLink = styled.a`
  color: #feffdf;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #7dd87d;
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