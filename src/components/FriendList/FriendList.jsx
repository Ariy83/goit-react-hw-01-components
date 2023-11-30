import { FriendListItem } from "./FriendListItem"

export const FriendList = ({friends=[]}) => {
    return (
    <ul className="friend-list">
          {friends.map(({ id, ...rest }) => (
              <FriendListItem
                  key={id}
                  {...rest}
                  //   avatar={avatar} name={name} isOnline={isOnline}
              />
))}
    </ul>
  )
}
