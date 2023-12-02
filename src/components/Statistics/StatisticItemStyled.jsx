import { StyledStatItem } from "./Statistics.styled";

export const StatisticItemStyled = ({ label, percentage }) => {
  return (
    <StyledStatItem>
      <span>{label}</span>
      <span>{percentage}</span>
  </StyledStatItem>
    
    );
}

