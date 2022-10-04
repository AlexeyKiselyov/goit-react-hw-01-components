import styled from 'styled-components';
// ===================================

export const StatisticsSection = styled.section`
  max-width: 270px;
  margin: 20px auto;

  box-shadow: 0px 0px 3px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
`
export const StatisticsTitle = styled.h2`
  margin-bottom: 5px;
  padding: 30px 63px;
  text-align: center;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.16;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #1f3349;
`
export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
`
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 67.5px;
  padding: 10px;

  border-right: 0.2px solid rgb(221, 221, 221);
  border-top: 0.2px solid rgb(221, 221, 221);

  &:last-child {
    border-right: none;
  }
`
export const StatisticsLabel = styled.span`
  margin-bottom: 5px;

  font-weight: 400;
  font-size: 13px;
  line-height: 1.16;
  text-align: center;

  color: #7f8e9d;
`

export const StatisticsPerc = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 1.14;
  text-align: center;
  color: #1f3349;
`
