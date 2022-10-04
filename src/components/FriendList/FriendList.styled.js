import styled from 'styled-components';
// ===================================
export const FriendListContainer = styled.ul`
  max-width: 270px;
  margin: 20px auto;
  padding: 10px 15px;

  box-shadow: 0px 0px 3px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
`;

export const FriendListLi = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;

  margin-bottom: 8px;
  padding: 10px 20px;

  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
`;
