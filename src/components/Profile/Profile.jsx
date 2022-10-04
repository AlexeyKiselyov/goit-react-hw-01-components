import PropTypes from "prop-types";
import { ProfileWrapper,ProfileDescription,ProfileAvatar,ProfileName,ProfileTagLog,ProfileStats,ProfileStatsItem,ProfileLabel,ProfileQuantity } from './Profile.styled';
// =================================================================
export const Profile = ({ user:{username, tag, location, avatar, stats}  }) => {
  return (
    <ProfileWrapper>
      <ProfileDescription>
        <ProfileAvatar
          src={avatar}
          alt="User avatar"          
        />
        <ProfileName>{username}</ProfileName>
        <ProfileTagLog>{tag}</ProfileTagLog>
        <ProfileTagLog>{location}</ProfileTagLog>
      </ProfileDescription>

      <ProfileStats>
        <ProfileStatsItem>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuantity>{stats.followers}</ProfileQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileLabel>Views</ProfileLabel>
          <ProfileQuantity>{stats.views}</ProfileQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileQuantity>{stats.likes}</ProfileQuantity>
        </ProfileStatsItem>
      </ProfileStats>
    </ProfileWrapper>
  )

}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    }
    ).isRequired
  }).isRequired
}
