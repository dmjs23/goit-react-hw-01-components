import PropTypes from 'prop-types';
import style from './Profile.module.css';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
  const { views, likes, followers } = stats;
  return (
    <>
      <div className={style.profile}>
        <div className={style.description}>
          <img src={avatar} alt="User avatar" className={style.avatar} />
          <p className={style.name}>{userName ? userName : 'Jan Kowalski'}</p>
          <p className={style.tag}>{tag}</p>
          <p className={style.location}>
            {location ? location : 'nie podano lokalizacji'}
          </p>
        </div>
        <ul className={style.stats}>
          <li>
            <span className={style.label}>Followers</span>
            <span className={style.quantity}>{followers ? followers : 0}</span>
          </li>
          <li>
            <span className={style.label}>Views</span>
            <span className={style.quantity}>{views ? views : 0}</span>
          </li>
          <li>
            <span className={style.label}>Likes</span>
            <span className={style.quantity}>{likes ? likes : 0}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  userName: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
