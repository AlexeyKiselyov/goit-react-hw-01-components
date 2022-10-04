import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
// ==================================
export const FriendList = ({friends}) => {
  return (
    <ul className="friend-list">
      {friends.map(friend =>        
          <li key = {friend.id} className="item">
            <FriendListItem friend={friend}/>
          </li>        
      )}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }
    ))
}