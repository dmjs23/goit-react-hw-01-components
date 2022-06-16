import StatisticsListItem from './StatisticsListItem';
import style from './Statistics.module.css'

const StatisticsList = ({ dataList }) => (
  <>
    <section className={style.statistics}>
      <h2 className={style.title}>Upload stats</h2>
      <ul className={style.stat_list}>
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
