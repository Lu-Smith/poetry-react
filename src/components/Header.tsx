import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #53a8b6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  width: 100vw;
  z-index: 99;
`;

const Title = styled.h1`
  color: #ffffff;
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
  background-color: #5585b5;
  cursor: pointer;
  padding: 5px 10px;
  border: 2px solid #79c2d0;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #79c2d0;
  }
`;


const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>
        Scottish Poetry
      </Title>
      <ModeContainer>
        <ModeButton>
          <span className="material-symbols-outlined">
            emoji_objects
          </span>
        </ModeButton>
        <ModeButton>
          <span className="material-symbols-outlined">
            nightlight
          </span>
        </ModeButton>
      </ModeContainer>
    </HeaderContainer>
  )
}

export default Header