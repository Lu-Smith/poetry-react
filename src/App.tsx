import Footer from './components/Footer';
import Header from './components/Header';
import IntroPage from './components/IntroPage';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #feffdf;
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
  return (
    <MainContainer>
      <Header />
      <IntroPage />
      <Footer />
    </MainContainer>
  )
}

export default App
