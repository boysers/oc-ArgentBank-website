import { Loader } from '../../components'
import './style.scss'

export const LoaderLayout: React.FC = () => {
  return (
    <main className="LoaderLayout">
      <div className="container">
        <Loader size="large" />
      </div>
    </main>
  )
}
