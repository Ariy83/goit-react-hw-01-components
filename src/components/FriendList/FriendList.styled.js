import styled from 'styled-components';

export const StyledFriendList = styled.ul`
  width: 100%;
  height: auto;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
export const StyledItem = styled.li`
  width: 360px;
  height: auto;
  padding: 10px 20px;
  display: flex;
  gap: 20px;
  justify-content: start;
  align-items: center;
  box-shadow: 2px 3px 4px 2px gray;
`;
export const StyledStatus = styled.span`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: green;
`;
export const StyledStatusOff = styled.span`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: red;
`;
export const StyledAvatar = styled.img`
  border-radius: 10px;
  width: 100px;
  height: auto;
`;
export const StyledName = styled.p`
  font-size: 30px;
  font-weight: 700;
`;
