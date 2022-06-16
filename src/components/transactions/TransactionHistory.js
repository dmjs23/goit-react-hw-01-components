import TransactionHistoryItems from './TransactionHistoryItems';

const TransactionHistory = ({ history }) => (
  <>
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
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
