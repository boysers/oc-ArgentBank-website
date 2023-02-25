import { useState } from 'react'
import { AccountList, UserSettings } from './components'
import bankAccount from '../../datas/bankAccount.json'

export const Profile: React.FC = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false)
  const onClose = () => setIsOpenSettings(prev=> !prev)
  return (
    <>
      <div className="header">
        {isOpenSettings ? (
          <UserSettings onClose={onClose}/>
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {bankAccount.userName}!
            </h1>
            <button
              className="edit-button"
              onClick={() => onClose()}
            >
              Edit Name
            </button>
          </>
        )}
      </div>
      <AccountList />
    </>
  )
}
