import { Account } from './Account.type'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  userName: string
  createdAt: string
  updatedAt: string
  accounts: Account[]
}
