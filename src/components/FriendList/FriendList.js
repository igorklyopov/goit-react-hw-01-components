import PropTypes from "prop-types";
import styles from "./FriendList.module.css";
import friends from "../../data/friends.json";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name }) => (
        <li key={id} className="item">
          <span className="status"></span>
          <img
            className="avatar"
            src={avatar}
            alt={`${name} avatar`}
            width="48"
          />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
