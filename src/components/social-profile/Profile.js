import PropTypes from 'prop-types';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
  const { views, likes, followers } = stats;
  return (
    <>
      <div className="profile">
        <div className="description">
          <img src={avatar} alt="User avatar" className="avatar" />
          <p className="name">{userName ? userName : 'Jan Kowalski'}</p>
          <p className="tag">{tag}</p>
          <p className="location">
            {location ? location : 'nie podano lokalizacji'}
          </p>
        </div>
        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers ? followers : 0}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{views ? views : 0}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes ? likes : 0}</span>
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
