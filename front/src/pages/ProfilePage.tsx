import { AccountList } from '../features/accounts'
import { Profile } from '../features/profile'

export const ProfilePage: React.FC = () => {
  return (
    <>
      <Profile />
      <AccountList />
    </>
  )
}
