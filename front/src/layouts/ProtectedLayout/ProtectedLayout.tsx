import { Outlet } from 'react-router-dom'
import './style.scss'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'

export const ProtectedLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
