import styled from 'styled-components';

export const StyledProfile = styled.div`
  border-radius: 10px;
  width: 400px;
  height: auto;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 2px 3px 4px 2px gray;
  overflow: hidden;
`;
export const StyledImg = styled.img`
  border-radius: 50%;
  width: 150px;
  height: auto;
  margin: 30px auto;
`;
export const StyledName = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;
export const StyledTag = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: gray;
`;
// export const StyledLocation = styled.p`
//   font-size: 20px;
//   font-weight: 400;
//   text-align: center;
//   color: gray;
// `;
export const StyledStats = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(80px, auto);
  background-color: lightgray;
  border: none;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.5px solid gray;
    span:first-child {
      color: gray;
    }
    span {
      text-align: center;
    }
  }
`;
