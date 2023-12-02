import { StyledStatItem } from "./Statistics.styled";

// const liColor = getRandomHexColor();
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

export const StatisticItemStyled = ({ label, percentage }) => {
  return (
    <StyledStatItem
      // style={{ backgroundColor: `${liColor}` }}
    >
      <span>{label}</span>
      <span>{percentage}</span>
  </StyledStatItem>
    
    );
}

