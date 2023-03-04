import './style.scss'
import { useEffect, useRef, useCallback, useState } from 'react'
import { Loader } from '../../../../components'
import { useDispatch, useSelector } from '../../../../app/hook'
import { updateUserName } from '../../profileSlice'
import { putProfile } from '../../profileApi'

type UserSettingsProps = { onClose: () => void }

export const UserSettings: React.FC<UserSettingsProps> = ({ onClose }) => {
  const [loading, setLoading] = useState(false)

  const input = useRef<HTMLInputElement>(null)

  const profile = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  const onClickUpdateUserName = useCallback(async () => {
    if (input.current !== null && input.current.value !== profile.userName) {
      setLoading(true)

      const response = await putProfile({ userName: input.current.value })

      setLoading(false)

      if (!response?.body.userName) return

      dispatch(updateUserName(response.body.userName))
    }
    onClose()
  }, [dispatch, onClose, profile.userName])

  useEffect(() => {
    if (input.current) {
      input.current.value = profile.userName ?? ''
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
            value={profile.firstName ?? ''}
            readOnly
            disabled
          />
        </p>
        <p>
          <label htmlFor="lastname">Last name: </label>
          <input
            type="text"
            name="lastname"
            value={profile.lastName ?? ''}
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
