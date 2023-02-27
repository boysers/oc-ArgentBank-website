import { useState } from 'react'
import { AccountList, UserSettings } from './components'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export const Profile: React.FC = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false)
  const onClose = () => setIsOpenSettings((prev) => !prev)
  const userName = useSelector((state: RootState) => state.profile.userName)
  return (
    <>
      <div className="header">
        {isOpenSettings ? (
          <UserSettings onClose={onClose} />
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {userName}!
            </h1>
            <button className="edit-button" onClick={() => onClose()}>
              Edit Name
            </button>
          </>
        )}
      </div>
      <AccountList />
    </>
  )
}
