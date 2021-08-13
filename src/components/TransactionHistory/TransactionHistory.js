import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";
import TransactionHistoryItem from "./TransactionHistoryItem";

const TransactionHistory = ({ items = [] }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr className={styles.thead}>
          <th className={styles.thCell}>Type</th>
          <th className={styles.thCell}>Amount</th>
          <th className={styles.thCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
