import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendListContainer,FriendListLi } from './FriendList.styled';
// ==================================
export const FriendList = ({friends}) => {
  return (
    <FriendListContainer>
      {friends.map(friend =>        
          <FriendListLi key = {friend.id} className="item">
            <FriendListItem friend={friend}/>
          </FriendListLi>        
      )}
    </FriendListContainer>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }
    ))
}