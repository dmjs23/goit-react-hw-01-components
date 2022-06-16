import StatisticsListItem from './StatisticsListItem';

const StatisticsList = ({ dataList }) => (
  <>
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {dataList.map(data => {
          const { id, label, percentage } = data;
          return (
            <StatisticsListItem
              key={id}
              label={label}
              percentage={percentage}
            />
          );
        })}
      </ul>
    </section>
  </>
);

export default StatisticsList;
