import PropTypes from "prop-types";

const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr>
      <td key={id}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistoryItem;
