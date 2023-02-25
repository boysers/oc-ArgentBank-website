import { Transaction } from './Transaction.type'

export interface Account {
  id: string
  title: string
  amount: string
  description: string
  transactions: Transaction[]
}
