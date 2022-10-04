import PropTypes from 'prop-types';
import {StatisticsSection,StatisticsTitle,StatisticsList,StatisticsItem,StatisticsPerc,StatisticsLabel } from './Statistics.styled';
// =======================
export const Statistics = ({title, data}) => {
  return (
    <StatisticsSection>
      { title && (<StatisticsTitle>{title}</StatisticsTitle>)}

      <StatisticsList>
        {data.map(item => 
          <StatisticsItem key={item.id}>
            <StatisticsLabel>{item.label}</StatisticsLabel>
            <StatisticsPerc>{item.percentage}%</StatisticsPerc>
          </StatisticsItem>)}       
      </StatisticsList>
    </StatisticsSection>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })).isRequired
}