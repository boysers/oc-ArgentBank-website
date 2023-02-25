import { useNavigate } from 'react-router-dom'
import { AccountCard } from '../../../../components'
import bankAccount from '../../../../datas/bankAccount.json'

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
