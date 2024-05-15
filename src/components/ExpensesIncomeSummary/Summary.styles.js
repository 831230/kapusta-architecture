import styled from "styled-components";

export const SummaryBox = styled.div`
  max-width: 213px;
`;

export const SummaryList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  margin-top: 4px;
`;

export const SummaryItem = styled.li`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: var(--text-gray);
  background: var(--secondary-bg-color);

  margin-bottom: 2px;
  padding: 12px;

  display: flex;
  justify-content: space-between;

  &:last-child {
    border-bottom-right-radius: 15px;
  }
`;

export const SummaryTitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  text-align: center;
  padding: 12px;
  background: var(--secondary-bg-color);

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border: 0 12 0 12;
`;
