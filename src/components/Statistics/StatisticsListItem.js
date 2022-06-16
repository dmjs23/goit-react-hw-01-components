import style from './Statistics.module.css';

export const StatisticsListItem = ({ label, percentage }) => {
  return (
    <>
      <li className={style.item}>
        <span className={style.label}>{label}</span>
        <span className={style.percentage}>{percentage}%</span>
      </li>
    </>
  );
};

export default StatisticsListItem;
