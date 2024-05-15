import styled from "styled-components";

export const CategoryContainer = styled.ul`
  width: 1034px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 0;

  @media screen and (max-width: 1088px) {
    width: 280px;
  }
`;

export const CategoryWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5px;
  margin: 20px;

  max-width: 100px;

  @media screen and (max-width: 768px) {
    max-width: 75px;
  }
`;
export const CategoryTotalText = styled.p`
  color: #52555f;

  font-size: 12px;
  letter-spacing: 0.48px;

  text-align: center;
  margin: 0;
`;
export const CategoryIcon = styled.img``;

export const CategoryLabel = styled.p`
  color: #52555f;

  font-size: 12px;
  letter-spacing: 0.24px;
  text-transform: uppercase;

  margin: 0;
`;
