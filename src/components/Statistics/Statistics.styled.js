import styled from 'styled-components';

export const StyledStatistics = styled.section`
  border-radius: 4px;
  width: 400px;
  height: auto;
  margin: 20px auto;
  padding-top: 20px;
  background-color: white;
  box-shadow: 1px 1px 2px 1px gray;
  overflow: hidden;
`;
export const StyledTitle = styled.h2`
  height: 40px;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  display: block;
  margin: auto;
`;
export const StyledStatList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(60px, auto);
  margin-top: 20px;
  border: none;
`;
export const StyledStatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -1px -0.5px 1.5px 0.5px black;
  span:first-child {
    font-size: 14px;
  }
  span {
    color: white;
    text-align: center;
    font-size: 20px;
  }
`;
