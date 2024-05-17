import styled from 'styled-components';


export const TableBox = styled.table`
  // width: 746px;
  // height: 400px;
  border-spacing: 0;
  border-collapse: collapse;
  // border: 2px solid black;
  // table-layout: fixed;
  @media screen and (min-width: 1200px) {
    width: 746px;
    height: 400px;
  }
`;
export const TableHead = styled.tr`
border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 40px;
  width: calc(100% / 5);
  border: 2px solid #000;
`
export const TableHeadItem = styled.td`
color: #000000;
font-weight: 700;
// border: 2px solid #000;
  border-spacing: 0;
  font-size:12px;
  text-transform: uppercase;
  text-align: center;
`;
export const TableBodys = styled.tbody`
background-color: #FFFFFF;
  // display: block;
  // overflow-y: auto;
  width: 746px;
  height: 380px;
  border: 2px solid black;
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
// width: 746px;
// text-align: center;
`

export const TableContainerItem = styled.td`

// height: 40px;

color: #52555F;
border-top: 2px solid;
border-bottom: 2px solid;
border-color: #000000;
position: relative;
z-index: 0;
// margin-right: 100px;
font-size: 14px;
  border-spacing: 0;
  `;





export const SumCell = styled.td`
color: ${({ value }) => (value >= 0 ? '#407946' : '#E7192E')}; 
  font-weight: 700;
`;

export const StyledSVG = styled.svg`
width: 18px;
height: 18px;
position: relative;
  z-index: 2;
  fill:black;
`;