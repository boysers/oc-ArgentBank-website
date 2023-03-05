import './style.scss'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../../components'
import { AccountCard, TransactionList } from './components'
import { Account } from '../../types'
import { useLoaderData } from '../../app/hook'

export const SingleAccount: React.FC = () => {
  const account = useLoaderData<Account>()
  const navigate = useNavigate()
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
