import GlobalStyle from '../../components/GlobalStyle';
import narutoPng from '../../images/naruto.png';
import styled from 'styled-components';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Content>
          <Quotation>
            <Quote>Carregando...</Quote>
            <Author>-</Author>
          </Quotation>
          <button>Quote No Jutsu</button>
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
`;

const Quotation = styled.p`
  width: 100%;
  diplay: flex;
  flex-direction: column;
`;

const Author = styled.span`
  margin-right: 30px;
  margin-left: auto;
`;

const Quote = styled.q`
  font-size: 1.5rem;
  width: 100%;
`;
