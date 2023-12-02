import { StatisticItem } from "./StatisticItem";

export const Statistics = ({ title, stats=[] }) => {
    
    return (
    <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
    {stats.map(({ id, ...rest}) => (
        <StatisticItem
          key={id}
          {...rest}
          // label={label} percentage={percentage}
        />
    ))}            
    </ul>
    </section>
    )
}

