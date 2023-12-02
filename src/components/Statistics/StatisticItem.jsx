

export const StatisticItem = ({ label, percentage }) => {
    
    return (
        <li>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
    );
}

