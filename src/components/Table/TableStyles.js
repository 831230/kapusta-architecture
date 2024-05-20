import styled from "styled-components";

export const TableBox = styled.table`
  margin-top: 40px;
  width: 746px;
  border-spacing: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 2px solid #f5f6fb;
  border-bottom: none;
  background: #f5f6fb;
  @media screen and (min-width: 1200px) {
    // width: 746px;
    // height: 400px;
  }
`;

export const TableHead = styled.tr`
  height: 40px;
`;

export const TableHeadItem = styled.td`
  color: #000000;
  font-weight: 700;
  width: ${(props) => props.$width};
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
`;

export const TableHeadItem2 = styled.td`
  display: none;
`;

export const TableBodys = styled.tbody`
  background-color: #fff;
  text-align: center;
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f6fb;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #ff751d;
  }
`;

export const TableContainer = styled.tr`
  height: 40px;
`;

export const TableContainerItem = styled.td`
  height: 40px;
  text-align: center;
  text-align: ${(props) => props.$textAlign};
  padding-left: ${(props) => props.$paddingLeft};
  color: #52555f;
  border-bottom: 2px solid;
  border-color: #f5f6fb;
  font-size: 12px;
`;

export const SumCell = styled.span`
  color: ${({ value }) => (value >= 0 ? "#407946" : "#E7192E")};
  font-weight: 700;
  padding-left: 20px;
`;

export const TrashButton = styled.button`
  width: 32px;
  height: 32px;
  border-bottom: 2px solid;
  background-color: #f5f6fb;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 0;
`;

export const StyledImg = styled.img`
  width: 18px;
  height: 18px;
  position: relative;
  z-index: 2;
  fill: black;
`;
