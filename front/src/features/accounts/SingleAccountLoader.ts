import { json, LoaderFunction } from 'react-router-dom'
import bankAccount from '../../assets/json/bankAccount.json'

export const singleAccountLoader: LoaderFunction = ({ params }) => {
  const account = bankAccount.accounts.find(
    (account) => params.id === account.id
  )
  if (!account) {
    console.warn('Account Not Found')
    throw json(null)
  }
  return account
}
