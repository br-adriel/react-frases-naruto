import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import GlobalStyle from '../../components/GlobalStyle';
import Quote from '../../components/Quote';
import narutoPng from '../../images/naruto.png';
import { getQuote } from '../../services';
import jutsoSound from '../../sounds/jutso.mp3';

const audio = new Audio(jutsoSound);

export function App() {
  const isMounted = useRef(true);

  const [quote, setQuote] = useState({
    text: 'Loading...',
    author: 'Loading...',
  });

  const loadQuote = async () => {
    const quoteObj = await getQuote();

    if (isMounted.current) {
      setQuote({
        text: quoteObj.quote,
        author: quoteObj.speaker,
      });
      audio.play();
    }
  };

  useEffect(() => {
    loadQuote();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Content>
          <Quote {...quote} />
          <Button onClick={() => loadQuote()}>Quote No Jutsu</Button>
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
