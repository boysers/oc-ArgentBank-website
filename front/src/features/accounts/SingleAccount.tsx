import './style.scss'
import { useNavigate, useParams } from 'react-router-dom'
import bankAccount from '../../assets/json/bankAccount.json'
import { Icon } from '../../components'
import { AccountCard } from './components/AccountCard/AccountCard'
import { TransactionList } from './components'

export const SingleAccount: React.FC = () => {
  const navigate = useNavigate()
  const params = useParams() as { id: string }
  const account = bankAccount.accounts.find(
    (account) => params.id === account.id
  )
  if (!account) throw new Error('account not found')
  return (
    <>
      <AccountCard {...account} className="AccountCard">
        <button
          onClick={() => navigate(`/dashboard/profile`)}
          className="link-button"
        >
          <Icon name="xmark" className="link" />
        </button>
      </AccountCard>
      <TransactionList transactions={account.transactions} />
    </>
  )
}
