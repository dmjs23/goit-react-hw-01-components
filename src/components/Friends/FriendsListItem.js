import style from './FriendsList.module.css';

export const FriendsListItem = ({ name, isOnline, avatar }) => {
  return (
    <>
      <li className={style.item}>
        <span className={isOnline ? style.statusOn : style.statusOff}></span>
        <img
          className={style.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={style.name}>{name}</p>
      </li>
    </>
  );
};

export default FriendsListItem;
