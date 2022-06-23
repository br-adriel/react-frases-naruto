import GlobalStyle from '../../components/GlobalStyle';
import narutoPng from '../../images/naruto.png';
import styled from 'styled-components';
import Quote from '../../components/Quote';
import Button from '../../components/Button';
import { getQuote } from '../../services';
import { useState } from 'react';

export function App() {
  const [quote, setQuote] = useState('Carregando...');
  const [author, setAuthor] = useState('Carregando...');

  const loadQuote = async () => {
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
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const NarutoImg = styled.img`
  height: 85%;
  align-self: flex-end;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-grow: 1;
`;
