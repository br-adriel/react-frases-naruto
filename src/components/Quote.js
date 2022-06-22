import styled from 'styled-components';
import { string } from 'prop-types';

const Quote = (props) => {
  const { text = '...', author = '' } = props;
  return (
    <Paragraph>
      <Text>{text}</Text>
      <Author>-{author}</Author>
    </Paragraph>
  );
};

Quote.propTypes = {
  text: string,
  author: string,
};

const Paragraph = styled.p`
  max-width: 80%;
  diplay: flex;
  flex-direction: column;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 4px;
  backdrop-filter: blur(5px);
`;

const Text = styled.q`
  font-size: 1.5rem;
  display: block;
`;

const Author = styled.span`
  margin-right: 30px;
  margin-left: auto;
  display: block;
`;

export default Quote;
