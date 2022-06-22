import styled from 'styled-components';

const Quote = (props) => {
  const { text = '...', author = '' } = props;
  return (
    <Paragraph>
      <Text>{text}</Text>
      <Author>-{author}</Author>
    </Paragraph>
  );
};

const Paragraph = styled.p`
  width: 100%;
  diplay: flex;
  flex-direction: column;
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
