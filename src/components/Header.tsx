import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: black;
  color: pink;

`;

const Title = styled.h1`
  color: yellow;
`;

const ModeContainer = styled.div`
  background-color: red;
  color: green;
`;

const ModeButton = styled.button`
  background-color: red;
  color: green;
`;


const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        Scottish Poetry
      </Title>
      <ModeContainer>
        <ModeButton>
          Light
        </ModeButton>
        <h2>/</h2>
        <ModeButton>
          Dark
        </ModeButton>
      </ModeContainer>
    </HeaderContainer>
  )
}

export default Header