import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import IntroPage from './components/IntroPage';
import styled from 'styled-components';
import MainPage from './components/MainPage';

const MainContainer = styled.div`
  color: #5b446a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode(prev => !prev);
  };

  return (
    <MainContainer className={mode ? "light" : ""}>
      <Header mode = {mode} toggleMode = {toggleMode} />
      <MainPage mode = {mode} />
      <IntroPage mode = {mode} />
      <Footer mode = {mode} />
    </MainContainer>
  )
}

export default App
