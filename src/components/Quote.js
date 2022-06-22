import styled from 'styled-components';

const Quote = (props) => {
  const { text = 'Loading', author = '' } = props;
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
  width: 100%;
`;

const Author = styled.span`
  margin-right: 30px;
  margin-left: auto;
`;

export default Quote;
