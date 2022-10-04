import PropTypes from 'prop-types';
import { Status,Avatar } from './FriendListItem.styles';
// =================================================================
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status isOnline={isOnline} />      
      <Avatar src={avatar} alt="User avatar" width="60" />
      <p className="name">{name}</p>
    </>
  )
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  })
}
