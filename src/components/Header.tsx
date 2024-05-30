import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: black;
  color: pink;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
`;

const Title = styled.h1`
  color: yellow;
`;

const ModeContainer = styled.div`
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
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    color: lightcoral;
    background-color: white;
  }
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
        <ModeButton>
          Dark
        </ModeButton>
      </ModeContainer>
    </HeaderContainer>
  )
}

export default Header