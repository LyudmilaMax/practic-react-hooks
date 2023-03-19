import styled from 'styled-components';

export const Input = styled.input`
  margin-right: 20px;
  height: 24px;
`;

export const Button = styled.button`
  background-color: ${props => (props.isActive ? 'tomato' : '')};
`;
