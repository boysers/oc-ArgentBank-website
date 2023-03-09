import { Account } from '../../../../types'
import { TransactionCard } from '../TransactionCard/TransactionCard'
import './style.scss'

type TransactionListProps = Pick<Account, 'transactions'>

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions
}) => {
  return (
    <section className="TransactionList">
      <h2 className="sr-only">Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Balance</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, idx) => (
            <TransactionCard
              key={`${idx}-${transaction.date}`}
              {...transaction}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}
