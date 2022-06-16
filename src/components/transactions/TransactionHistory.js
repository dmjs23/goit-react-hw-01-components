import TransactionHistoryItems from './TransactionHistoryItems';
import style from './transactionHistory.module.css';

const TransactionHistory = ({ history }) => (
  <>
    <table className={style.transaction_history}>
      <thead>
        <tr className={style.header}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={style.body}>
        {history.map(historyitem => {
          const { id, type, amount, currency } = historyitem;
          return (
            <TransactionHistoryItems
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  </>
);

export default TransactionHistory;
