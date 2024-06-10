import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import IntroPage from './components/IntroPage';
import styled from 'styled-components';

const MainContainer = styled.div`
  color: #5b446a;
  height: 100%;
  width: 100vw;
    background-color: #2c3031;

  &.light {
    background-color: rgb(245, 223, 223);
  }
`;

function App() {
  const [mode, setMode] = useState(false);
  const [poems, setPoems] = useState(false);

  const toggleMode = () => {
    setMode(prev => !prev);
  };

  const toggleHome = () => {
    setPoems(prev => !prev);
  };

  const goHome = () => {
    setPoems(false);
  };

  return (
    <MainContainer className={mode ? "light" : ""}>
      <Header mode = {mode} toggleMode = {toggleMode} goHome = {goHome} />
      <IntroPage mode = {mode} toggleHome = {toggleHome} poems = {poems} />
      <Footer mode = {mode} />
    </MainContainer>
  )
}

export default App
