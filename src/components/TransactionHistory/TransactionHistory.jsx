import { TransactionTableRow } from "./TransactionTableRow"

export const TransactionHistory = ({items=[]}) => {
    return (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
          {items.map(({ id, ...rest }) => (
              <TransactionTableRow
                  key={id}
                  {...rest}
                  //   type={type} amount={amount} currency={currency}
              />
))}
    </tbody>
</table>
  )
}