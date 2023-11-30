import { StatisticItem } from "./StatisticItem";

export const Statistics = ({ title, stats=[] }) => {
    if (!title) {
        return (
    <section className="statistics">
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
    );
    }
    else {
    return (
    <section className="statistics">
    <h2 className="title">{title}</h2>
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
    )}
}

