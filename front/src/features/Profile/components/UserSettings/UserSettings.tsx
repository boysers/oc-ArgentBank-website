import './style.scss'
import { useEffect, useRef, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../redux/store'
import { updateUserName } from '../../../../redux/profileSlice'
import { wait } from '../../../../utils'
import { Loader } from '../../../../components'

type UserSettingsProps = { onClose: () => void }

export const UserSettings: React.FC<UserSettingsProps> = ({ onClose }) => {
  const [loading, setLoading] = useState(false)
  const profile = useSelector((state: RootState) => state.profile)
  const dispatch = useDispatch<AppDispatch>()
  const input = useRef<HTMLInputElement>(null)

  const onClickUpdateUserName = useCallback(async () => {
    if (input.current !== null && input.current.value !== profile.userName) {
      setLoading(true)
      await wait(1500)
      setLoading(false)
      dispatch(updateUserName(input.current.value))
    }
    onClose()
  }, [dispatch, onClose, profile.userName])

  useEffect(() => {
    if (input.current) {
      input.current.value = profile.userName
    }
  }, [profile.userName])

  return (
    <div className="UserSettings">
      <h3>Edit user info</h3>
      <form autoComplete="off">
        <p>
          <label htmlFor="username">User name: </label>
          <input type="text" name="username" ref={input} />
        </p>
        <p>
          <label htmlFor="firstname">First name: </label>
          <input
            type="text"
            name="firstname"
            value={profile.firstName}
            readOnly
            disabled
          />
        </p>
        <p>
          <label htmlFor="lastname">Last name: </label>
          <input
            type="text"
            name="lastname"
            value={profile.lastName}
            readOnly
            disabled
          />
        </p>
        <div className="wrapper-button">
          {loading && <Loader size="small" />}
          <input
            type="submit"
            value="Save"
            className="edit-button"
            onClick={(e) => {
              e.preventDefault()
              onClickUpdateUserName()
            }}
            disabled={loading}
          />
          <input
            type="submit"
            value="Cancel"
            className="edit-button"
            onClick={(e) => {
              e.preventDefault()
              onClose()
            }}
            disabled={loading}
          />
        </div>
      </form>
    </div>
  )
}
