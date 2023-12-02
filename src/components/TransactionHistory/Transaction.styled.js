import styled from 'styled-components';

export const StyledTransactionHistory = styled.table`
  width: 400px;
  height: auto;
  margin: 20px auto;
  background-color: white;
  border-spacing: 0;
  border-collapse: collapse;
  border: 0;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 1px 2px 0.5px gray;

  thead {
    background-color: lightblue;
    color: white;

    th:first-child {
      text-align: left;
      text-indent: 25px;
      border-right: 1px solid white;
    }
    th:last-child {
      border-left: 1px solid white;
    }
    th {
      padding: 20px;
    }
  }
  tbody {
    tr {
      td:first-child {
        text-align: left;
        text-indent: 25px;
        border-left: 0;
      }
      td:last-child {
        border-right: 0;
      }
      td {
        border-inline: 1px solid gray;
        padding: 20px;
        text-align: center;
      }
    }
  }
`;

export const StyledTransactionRowGray = styled.tr`
  background-color: lightgray;
`;
