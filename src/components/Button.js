import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: #332c36;
  color: #fff;
  padding: 8px 12px;
  font-size: 1rem;
  font-family: 'Staatliches', serif;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  border-bottom: 4px solid #171616;
  transition: color 0.3s;

  &:hover {
    color: #f27136;
  }

  &:active {
    border-top: 4px transparent solid;
    border-bottom: none;
  }
`;

export default Button;
