import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import './style.scss'
import { Footer } from '../Footer/Footer'

export const RootLayout: React.FC = () => {
  const location = useLocation()
  const className = `main${location.pathname !== '/' ? ' bg-dark' : ''}`
  return (
    <>
      <Navbar />
      <main className={className}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
