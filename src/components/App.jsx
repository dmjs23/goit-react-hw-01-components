import Profile from './social-profile/Profile'
import user from './social-profile/user.json';
import data from "./Statistics/data.json"
import Statistics from './Statistics/StatisticsListItem';


export const App = () => {
  return (
    <Profile
      userName={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
