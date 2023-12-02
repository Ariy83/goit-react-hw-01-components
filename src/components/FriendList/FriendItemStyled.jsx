import { StyledAvatar, StyledItem, StyledName, StyledStatus, StyledStatusOff } from "./FriendList.styled"


export const FriendItemStyled = ({ avatar, name, isOnline }) => {
    
    return (
    <StyledItem>
        {isOnline ? <StyledStatus></StyledStatus> : <StyledStatusOff></StyledStatusOff>}
        <StyledAvatar src={avatar} alt={name} width="48" />
        <StyledName>{name}</StyledName>
    </StyledItem>
    )
}

