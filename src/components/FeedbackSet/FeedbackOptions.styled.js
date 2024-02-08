import styled from 'styled-components';

export const SettingsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SettingsEl = styled.li`
  display: inline-block;
  margin: 30px;
`;

export const SettingsButton = styled.button`
  padding: 10px 20px;
  background-color: ${props =>
    props.option === 'good' ? '' : props.option === 'neutral'};
  color: #00000;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${props =>
      props.option === 'good' ? '' : props.option === 'neutral'};
  }
`;
