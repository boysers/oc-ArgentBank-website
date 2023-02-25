import './style.scss'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        Copyright {new Date().getFullYear()} Argent Bank
      </p>
    </footer>
  )
}
