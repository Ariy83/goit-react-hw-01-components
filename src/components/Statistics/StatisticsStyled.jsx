import PropTypes from 'prop-types'
import { StyledStatItem, StyledStatList, StyledStatistics, StyledTitle } from "./Statistics.styled";
// import { StatisticItemStyled } from "./StatisticItemStyled";

export const StatisticsStyled = ({ title, stats = [] }) => {
    return (
    <StyledStatistics>
    {title && <StyledTitle>{title.toUpperCase()}</StyledTitle>}
    <StyledStatList>
          {stats.map(({ id, label, percentage }) => (
            <StyledStatItem
              key={id}
              style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, 0)}` }}
    >
      <span>{label}</span>
      <span>{percentage}</span>
            </StyledStatItem>
            
        // <StatisticItemStyled
        //   key={id}
        //   label={label} percentage={percentage}
          // {...rest}
          // style={{backgroundColor: `${liColor}`}}
        // />
      
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

// const liColor = getRandomHexColor();
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }