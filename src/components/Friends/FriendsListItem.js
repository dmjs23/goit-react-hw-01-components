export const FriendsListItem = ({ name, isOnline, avatar }) => {
  return (
    <>
      <li className="item">
        <span className="status">{isOnline ? 'green' : 'red'}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    </>
  );
};

export default FriendsListItem;
