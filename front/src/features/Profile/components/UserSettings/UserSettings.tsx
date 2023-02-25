import './style.scss'
import bankAccount from '../../../../datas/bankAccount.json'

type UserSettingsProps = { onClose: () => void }

export const UserSettings: React.FC<UserSettingsProps> = ({ onClose }) => {
  const { firstName, lastName, userName } = bankAccount
  return (
    <div className="UserSettings">
      <h3>Edit user info</h3>
      <form autoComplete="off">
        <p>
          <label htmlFor="username">User name: </label>
          <input type="text" name="username" value={userName} readOnly />
        </p>
        <p>
          <label htmlFor="firstname">First name: </label>
          <input
            type="text"
            name="firstname"
            value={firstName}
            readOnly
            disabled
          />
        </p>
        <p>
          <label htmlFor="lastname">Last name: </label>
          <input
            type="text"
            name="lastname"
            value={lastName}
            readOnly
            disabled
          />
        </p>

        <input
          type="submit"
          value="Save"
          className="edit-button"
          onClick={(e) => {
            e.preventDefault()
            onClose()
          }}
        />
        <input
          type="submit"
          value="Cancel"
          className="edit-button"
          onClick={(e) => {
            e.preventDefault()
            onClose()
          }}
        />
      </form>
    </div>
  )
}
