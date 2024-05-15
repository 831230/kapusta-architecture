import styled from 'styled-components';

export const CalendarBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
`;

export const CalendarIcon = styled.div`
  display: flex;
  cursor: pointer;
  fill: white;
`;

export const Label = styled.label`
  background: white;
  border-radius: 4px;
`;

export const CalendarInput = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: #fff;
  width: 74px;
  margin-left: 10px;
  border: 0;
  background: transparent;
  cursor: pointer;
`;