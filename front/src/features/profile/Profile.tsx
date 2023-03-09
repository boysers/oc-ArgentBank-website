import { useState } from 'react'
import { useSelector } from '../../app/hook'
import { UserSettings } from './components'

export const Profile: React.FC = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false)
  const onClose = () => setIsOpenSettings((prev) => !prev)
  const userName = useSelector((state) => state.profile.userName)
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
    </>
  )
}
