import React from 'react';
import styled from 'styled-components';

interface Props {
  mode: boolean,
  toggleMode: () => void
}

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

  &.light {
    background-color: #ffffff;
  }
`;

const Title = styled.h1`
  color: #484c4d;
  transition: color 0.3s ease;

  &.light {
    color: rgb(181, 86, 86);
  }

  &:hover {
    color: #ffffff;
  }

  &.light: hover {
    color: #5585b5;
  }
`;

const ModeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3px
`;

const ModeButton = styled.button`
  background-color: #5585b5;
  cursor: pointer;
  padding: 5px 10px;
  border: 2px solid #79c2d0;
  border-radius: 5px;
  transition: all 0.3s ease;

  &.light {
  background-color: #ffffff;
  border: 2px solid rgb(181, 86, 86);
}

  &:hover {
    background-color: #F3AD61;
  }

  .light &:hover {
  background-color: #ffffff;
  border: 2px solid rgb(235, 196, 196);
  }

  @media screen and (max-width: 786px) {
    padding: 5px 8px;
    border: 1px solid #79c2d0;
    font-size: 0.3rem;
  }
`;


const Header: React.FC<Props> = ({mode, toggleMode}) => {
  return (
    <HeaderContainer className={mode ? "light" : ""}>
      <Title className={mode ? "light" : ""}>
        Scottish Poetry
      </Title>
      <ModeContainer className={mode ? "light" : ""}>
        {!mode ? 
        <ModeButton onClick={toggleMode} className={mode ? "light" : ""}>
          <span className="material-symbols-outlined">
            emoji_objects
          </span>
        </ModeButton>:
        <ModeButton onClick={toggleMode} className={mode ? "light" : ""} >
          <span className="material-symbols-outlined">
            nightlight
          </span>
        </ModeButton>
        }
      </ModeContainer>
    </HeaderContainer>
  )
}

export default Header