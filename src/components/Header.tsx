import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #5b446a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  width: 100vw;
`;

const Title = styled.h1`
  color: #feffdf;
  transition: all 0.3s ease;

  &:hover {
    color: #7dd87d;
  }
`;

const ModeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ModeButton = styled.button`
  background-color: #7dd87d;
  color: #283739;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    color: #feffdf;
    background-color: #4c9173;
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