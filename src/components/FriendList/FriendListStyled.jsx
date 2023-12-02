import PropTypes from 'prop-types'
import { FriendItemStyled } from "./FriendItemStyled"
import { StyledFriendList } from "./FriendList.styled"

export const FriendListStyled = ({friends=[]}) => {
    return (
    <StyledFriendList>
          {friends.map(({ id, ...rest }) => (
              <FriendItemStyled
                  key={id}
                  {...rest}
                  //   avatar={avatar} name={name} isOnline={isOnline}
              />
))}
    </StyledFriendList>
  )
}

FriendListStyled.propTypes = {
  	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
      
    })
  ),
}