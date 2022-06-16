import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';
import data from './components/Statistics/data.json';
import StatisticsList from './components/Statistics/StatisticsList';
import Friends from './components/Friends/Friends.json';
import FriendsList from './components/Friends/FriendsList';
import transactions from './components/transactions/transactions.json';
import TransactionHistory from './components/transactions/TransactionHistory'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profile
      userName={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <StatisticsList dataList={data} />
    <FriendsList friends={Friends} />
    <TransactionHistory history={transactions} />
  </React.StrictMode>
);
