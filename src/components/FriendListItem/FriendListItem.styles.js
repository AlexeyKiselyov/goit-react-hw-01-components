import styled from 'styled-components';
// ===================================
export const Status = styled.span`
  width: 12px;
  height: 12px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 60px;
  border-radius: 50%;
  box-shadow: rgb(126 147 255 / 20%) 0px 1px 4px;
`;
