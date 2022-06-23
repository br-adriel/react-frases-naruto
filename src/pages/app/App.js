import GlobalStyle from '../../components/GlobalStyle';
import narutoPng from '../../images/naruto.png';
import styled from 'styled-components';
import Quote from '../../components/Quote';
import Button from '../../components/Button';
import { getQuote } from '../../services';
import { useState } from 'react';
import jutsoSound from '../../sounds/jutso.mp3';

export function App() {
  const audio = new Audio(jutsoSound);

  const [quote, setQuote] = useState('Loading...');
  const [author, setAuthor] = useState('Loading...');

  const loadQuote = async () => {
    audio.play();

    const quoteObj = await getQuote();

    setQuote(quoteObj.quote);
    setAuthor(quoteObj.speaker);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Content>
          <Quote text={quote} author={author} />
          <Button onClk={loadQuote}>Quote No Jutsu</Button>
        </Content>
        <NarutoImg src={narutoPng} alt='Naruto smiling with an eye closed' />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NarutoImg = styled.img`
  max-height: 85%;
  max-width: 50%;
  align-self: flex-end;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-grow: 1;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
