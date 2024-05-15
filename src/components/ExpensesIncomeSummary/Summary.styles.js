import styled from "styled-components";

const BaseTextStyles = `
  font-family: var(--primary-font);
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-gray);
`;

const BaseBackgroundStyles = `
  background: var(--secondary-bg-color);
`;

export const SummaryBox = styled.div`
  min-width: 213px;
  max-width: 230px;
`;

export const SummaryList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  margin-top: 4px;
`;

export const SummaryItem = styled.li`
  ${BaseTextStyles}
  ${BaseBackgroundStyles}
  padding: 12px;
  margin-bottom: 2px;
  display: flex;
  justify-content: space-between;

  &:last-child {
    border-bottom-right-radius: 15px;
  }
`;

export const SummaryTitle = styled.div`
  ${BaseTextStyles}
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.02em;
  text-align: center;
  padding: 12px;
  ${BaseBackgroundStyles}
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
