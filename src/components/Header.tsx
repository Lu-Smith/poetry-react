import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: black;
  color: pink;
`;

const Title = styled.div`
  color: yellow;
`;

const ModeContainer = styled.div`
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
        Mode
      </ModeContainer>
    </HeaderContainer>
  )
}

export default Header