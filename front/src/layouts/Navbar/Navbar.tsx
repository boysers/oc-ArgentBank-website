import './style.scss'
import { Link, useLocation } from 'react-router-dom'
import argentBankLogo from '../../assets/img/argentBankLogo.png'

export const Navbar: React.FC = () => {
  const location = useLocation()
  let isAuth = location.pathname.match(/dashboard/i)
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
              <i className="fa fa-user-circle"></i> Tony
            </Link>
            <Link to="/" className="main-nav-item">
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
