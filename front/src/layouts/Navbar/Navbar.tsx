import './style.scss'
import argentBankLogo from '../../assets/img/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from '../../hooks'
import { logout } from '../../redux/authSlice'
import { resetStateProfile } from '../../redux/profileSlice'

export const Navbar: React.FC = () => {
  const { auth, profile } = useSelector((state) => state)
  const dispatch = useDispatch()

  let isAuth = auth.isAuthenticated

  return (
    <nav className="main-nav">
      <Link to={isAuth ? '/dashboard' : '/'} className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuth ? (
          <>
            <Link to="/dashboard/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i> {profile.firstName}
            </Link>
            <Link
              to="/"
              className="main-nav-item"
              onClick={() => {
                dispatch(logout())
                dispatch(resetStateProfile())
              }}
            >
              <i className="fa fa-sign-out"></i> Sign Out
            </Link>
          </>
        ) : (
          <Link to="/signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}
