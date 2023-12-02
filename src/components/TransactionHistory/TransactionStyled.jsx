import PropTypes from 'prop-types'
import { StyledTransactionHistory } from "./Transaction.styled"
import { TransactionTableRow, TransactionTableRowGray } from "./TransactionTableRow"

export const TransactionHistoryStyled = ({items=[]}) => {
    return (
    <StyledTransactionHistory>
  <thead>
    <tr>
      <th>TYPE</th>
      <th>AMOUNT</th>
      <th>CURRENCY</th>
    </tr>
  </thead>

  <tbody>
          {items.map(({ id, ...rest }, i) => (
            !(i%2 === 0) ?
              <TransactionTableRowGray
                  key={id}
                  {...rest}
              />
              : <TransactionTableRow
                  key={id}
                  {...rest}
                  //   type={type} amount={amount} currency={currency}
              />
))}
    </tbody>
</StyledTransactionHistory>
  )
}

TransactionHistoryStyled.propTypes = {
		items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,      
		})
	),
}