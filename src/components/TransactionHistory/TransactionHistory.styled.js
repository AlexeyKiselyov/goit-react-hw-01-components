import styled from 'styled-components';
// ===================================
export const Table = styled.table`
  border-collapse: collapse;
  width: 270px;
  margin: 20px auto;
  padding: 10px 15px;
  box-shadow: 0px 0px 3px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
`;

export const TableHead = styled.th`
  padding: 10px;
  width: 89px;
  text-align: center;

  background-color: #80cfee;
  color: white;
  font-size: 16px;
  line-height: 1.16;
  text-transform: uppercase;

  box-shadow: 0px 1px 2px rgba(126, 147, 255, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const TableRow = styled.tr`
  &:nth-child(2n) {
    background-color: #e3f6fa;
  }
`;

export const TableData = styled.td`
  padding: 10px;
  width: 89px;
  text-align: center;

  font-size: 13px;
  line-height: 1.16;
  color: #7f8e9d;

  box-shadow: 0px 1px 2px rgba(126, 147, 255, 0.3);
  border-radius: 6px;
`;
