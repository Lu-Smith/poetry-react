import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: black;
  color: pink;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Title = styled.h1`
  color: yellow;
`;

const ModeContainer = styled.div`
  background-color: red;
  color: green;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ModeButton = styled.button`
  background-color: red;
  color: green;
  cursor: pointer;
  padding: 5px 10px;
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