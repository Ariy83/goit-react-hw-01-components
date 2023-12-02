import PropTypes from 'prop-types'
import { StyledImg, StyledName, StyledProfile, StyledStats, StyledTag } from "./Profile.styled";


export const ProfileStyled = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;
    return (
        <StyledProfile>
  <div>
    <StyledImg
      src={avatar}
      alt={tag}
    />
    <StyledName>{username}</StyledName>
    <StyledTag>@{tag}</StyledTag>
    <StyledTag>{location}</StyledTag>
  </div>

  <StyledStats>
    <li>
      <span>Followers</span>
      <span>{followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
  </StyledStats>
</StyledProfile>
    );
}

ProfileStyled.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
		stats: 
		PropTypes.shape({
			followers: PropTypes.number.isRequired,
			views: PropTypes.number.isRequired,
			likes: PropTypes.number.isRequired,
      
		}),
}