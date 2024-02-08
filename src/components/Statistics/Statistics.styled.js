import styled from 'styled-components';

export const Option = styled.li`
  margin: 10px 0;
  list-style: none;
  width: 320px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: white;
  border-radius: 5px;
  padding: 5px;

  background-color: ${props =>
    props.type === 'good'
      ? '#388e3c'
      : props.type === 'neutral'
      ? '#fbc02d'
      : props.type === 'bad'
      ? '#d32f2f'
      : 'black'};
`;
