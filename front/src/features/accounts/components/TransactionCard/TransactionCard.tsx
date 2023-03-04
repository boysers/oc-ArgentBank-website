import { useState } from 'react'
import { Icon } from '../../../../components'
import './style.scss'
import { Transaction } from '../../../../types'

type TransactionCardProps = Transaction

export const TransactionCard: React.FC<TransactionCardProps> = ({
  date,
  description,
  amount,
  balance,
  type,
  category,
  note = '&nbsp;'
}) => {
  const [open, setOpen] = useState(false)
  const className = 'TransactionCard'
  const classNameDetails = `${className}__details${open ? '--open' : ''}`
  const classNameIcon = open ? `${className}__Icon--open` : ''
  return (
    <tr className="TransactionCard">
      <td>
        <table>
          <thead>
            <tr>
              <th>{new Intl.DateTimeFormat('fr-FR').format(new Date(date))}</th>
            </tr>
          </thead>
          <tbody className={classNameDetails}>
            <tr>
              <th>Transaction type</th>
            </tr>
            <tr>
              <th>Category</th>
            </tr>
            <tr>
              <th>Note</th>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th>{description}</th>
            </tr>
          </thead>
          <tbody className={classNameDetails}>
            <tr>
              <td>{type}</td>
            </tr>
            <tr>
              <td>{category}</td>
            </tr>
            <tr>
              <td>{note}</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th>{amount}</th>
            </tr>
          </thead>
          <tbody className={classNameDetails}>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th>{balance}</th>
            </tr>
          </thead>
          <tbody className={classNameDetails}>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th>
                <button
                  className="TransactionCard__Icon"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <Icon name="chevron" className={classNameIcon} />
                </button>
              </th>
            </tr>
          </thead>
          <tbody className={classNameDetails}>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  )
}
