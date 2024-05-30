import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: black;
  color: pink;
`;

const StyledLink = styled.a`
  color: red;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h3>
        Coded by{' '}
        <StyledLink
          href='https://www.lunasmithart.com/'
          target='_blank'
          className='portfolio'
        >
          Luna Smith
        </StyledLink>
        -{' '}
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