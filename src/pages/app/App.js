import GlobalStyle from '../../components/GlobalStyle';
import narutoPng from '../../images/naruto.png';

export function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <p>
          <q>Carregando...</q>
          <span>-</span>
        </p>
        <button>Quote No Jutsu</button>
        <img src={narutoPng} alt='Naruto smiling with an eye closed' />
      </div>
    </>
  );
}
