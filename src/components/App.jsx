import { ProfileStyled } from './Profile/ProfileStyled';
import { StatisticsStyled } from './Statistics/StatisticsStyled';
import { FriendListStyled } from './FriendList/FriendListStyled';
import { TransactionHistoryStyled } from './TransactionHistory/TransactionStyled';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101'
      }}
    >
      <ProfileStyled
        {...user}
  // username={user.username}
  // tag={user.tag}
  // location={user.location}
  // avatar={user.avatar}
  // stats={user.stats}
      />

      <StatisticsStyled title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      
      <FriendListStyled friends={friends} />

      <TransactionHistoryStyled items={transactions} />

    </div>

  );
};

