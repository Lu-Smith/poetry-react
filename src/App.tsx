import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import IntroPage from './components/IntroPage';
import styled from 'styled-components';

const MainContainer = styled.div`
  color: #5b446a;
  height: 100vh;
  width: 100vw;
  background-color: #2c3031;

  &.light {
    background-color: rgb(235, 196, 196);
  }
`;

function App() {
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode(prev => !prev);
  };

  return (
    <MainContainer className={mode ? "light" : ""}>
      <Header mode = {mode} toggleMode = {toggleMode} />
      <IntroPage mode = {mode} />
      <Footer mode = {mode} />
    </MainContainer>
  )
}

export default App
