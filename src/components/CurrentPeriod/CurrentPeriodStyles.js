import styled from "styled-components";

export const CurrentPeriodContainer = styled.div`
  width: 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CurrentPeriodWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5px;
`;
export const CurrentPeriodButton = styled.button`
  border: none;
  background: none;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
export const CurrentPeriodButtonIcon = styled.img`
  padding: 0;
`;
export const CurrentPeriodLabel = styled.h2`
  color: #52555f;

  font-size: 12px;
  letter-spacing: 0.48px;
  font-weight: 400;

  text-align: center;
  margin: 0;
  margin-bottom: 5px;
`;
export const CurrentPeriodDate = styled.p`
  color: #000;

  font-size: 14px;
  letter-spacing: 0.28px;
  font-weight: 700;

  text-align: center;
  margin: 0;
`;
