import FriendsListItem from './FriendsListItem';
import style from './FriendsList.module.css'

const FriendsList = ({ friends }) => (
  <>
    <section className={style.Friends}>
      <ul className={style.friend_list}>
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
