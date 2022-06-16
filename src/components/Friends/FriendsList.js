import FriendsListItem from './FriendsListItem';

const FriendsList = ({ friends }) => (
  <>
    <section className="Friends">
      <ul className="friend-list">
        {friends.map(friend => {
          const { avatar, name, isOnline, id } = friend;

          return (
            <FriendsListItem
              key={id}
              isOnline={isOnline}
              name={name}
              avatar={avatar}
            />
          );
        })}
      </ul>
    </section>
  </>
);

export default FriendsList;
