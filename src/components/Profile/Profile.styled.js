import styled from 'styled-components';
// ===================================
export const ProfileWrapper = styled.div`
  max-width: 270px;
  margin: 20px auto;

  box-shadow: 0px 0px 3px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px; 
`
export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
`
export const ProfileAvatar = styled.img`
  width: 120px;
  border-radius: 50%;
  box-shadow: rgb(126 147 255 / 20%) 0px 1px 4px;
`

export const ProfileName = styled.p`
  margin-top: 10px;
  margin-bottom: 5px;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: #1f3349;
`
export const ProfileTagLog = styled.p`
  margin-bottom: 5px;

  font-weight: 400;
  font-size: 15px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: #7f8e9d;
`
export const ProfileStats = styled.ul`
  display: flex;
  justify-content: center;  
`
export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  padding: 20px;

  border-right: 0.2px solid rgb(221, 221, 221);
  border-top: 0.2px solid rgb(221, 221, 221);
  
  &:last-child {
    border-right: none;
  }
`
export const ProfileLabel = styled.span`
  margin-bottom: 5px;

  font-weight: 400;
  font-size: 13px;
  line-height: 1.16;
  text-align: center;

  color: #7f8e9d;
`
export const ProfileQuantity = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 1.14;

  color: #1f3349;
`