import PropTypes from 'prop-types'
import { StatisticItemStyled } from "./StatisticItemStyled";
import { StyledStatList, StyledStatistics, StyledTitle } from "./Statistics.styled";

// const liColor = getRandomHexColor();
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

export const StatisticsStyled = ({ title, stats = [] }) => {
    return (
    <StyledStatistics>
    {title && <StyledTitle>{title.toUpperCase()}</StyledTitle>}
    <StyledStatList>
          {stats.map(({ id, label, percentage }) => (
      
        <StatisticItemStyled
          key={id}
          label={label} percentage={percentage}
          // {...rest}
          // style={{backgroundColor: `${liColor}`}}
        />
      
    ))}            
    </StyledStatList>
    </StyledStatistics>
    )
}


StatisticsStyled.propTypes = {
  	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
      
    })
  ),
}