import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";
import TransactionHistoryItem from "./TransactionHistoryItem";

const TransactionHistory = ({ items = [] }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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

// TransactionHistory.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//      followers: PropTypes.number.isRequired,
//      views: PropTypes.number.isRequired,
//      likes: PropTypes.number.isRequired,
//   }),
// }

export default TransactionHistory;
