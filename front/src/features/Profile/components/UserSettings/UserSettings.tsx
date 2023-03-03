import './style.scss'
import { useEffect, useRef, useCallback, useState } from 'react'
import { updateUserName } from '../../../../redux/profileSlice'
import { Loader } from '../../../../components'
import { useDispatch, useSelector } from '../../../../hooks'
import { modifyProfile } from '../../../../services/putProfile'

type UserSettingsProps = { onClose: () => void }

export const UserSettings: React.FC<UserSettingsProps> = ({ onClose }) => {
  const [loading, setLoading] = useState(false)
  const { profile, auth } = useSelector((state) => state)
  const dispatch = useDispatch()
  const input = useRef<HTMLInputElement>(null)

  const onClickUpdateUserName = useCallback(async () => {
    if (input.current !== null && input.current.value !== profile.userName) {
      setLoading(true)

      const response = await modifyProfile(
        { userName: input.current.value },
        auth.token
      )

      setLoading(false)

      if (response.body.userName) {
        dispatch(updateUserName(response.body.userName))
      } else {
        dispatch(updateUserName(input.current.value))
      }
    }
    onClose()
  }, [auth.token, dispatch, onClose, profile.userName])

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
