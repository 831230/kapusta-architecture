import styled from "styled-components";
import { Link } from "react-router-dom";

export const ReportsNavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  gap: 15px;
`;
export const ReportsNavText = styled.p`
  color: #52555f;

  font-size: 12px;
  letter-spacing: 0.48px;
`;
export const ReportsNavIcon = styled.img`
  width: 24px;
  height: 24px;
`;
