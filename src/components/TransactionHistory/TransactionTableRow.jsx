import { StyledTransactionRowGray } from "./Transaction.styled"


export const TransactionTableRow = ({type, amount, currency}) => {
    return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
}

export const TransactionTableRowGray = ({type, amount, currency}) => {
    return (
    <StyledTransactionRowGray>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </StyledTransactionRowGray>
  )
}