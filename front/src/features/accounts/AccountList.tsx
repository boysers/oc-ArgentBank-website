import { useNavigate } from 'react-router-dom'
import bankAccount from '../../assets/json/bankAccount.json'
import { AccountCard } from './components/AccountCard/AccountCard'

export const AccountList: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {bankAccount.accounts.map((account) => (
        <AccountCard {...account} key={account.id}>
          <button
            onClick={() => navigate(`/dashboard/account/${account.id}`)}
            className="transaction-button"
          >
            View transactions
          </button>
        </AccountCard>
      ))}
    </>
  )
}
