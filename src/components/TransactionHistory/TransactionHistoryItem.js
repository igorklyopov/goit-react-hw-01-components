import styles from "./TransactionHistory.module.css";

const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr className={styles.row}>
      <td key={id} className={styles.tdCell}>
        {type}
      </td>
      <td className={styles.tdCell}>{amount}</td>
      <td className={styles.tdCell}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
