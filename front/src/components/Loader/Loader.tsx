import './style.scss'

type LoaderSize = 'small' | 'medium' | 'large'

type LoaderProps = {
  size?: LoaderSize
}

export const Loader: React.FC<LoaderProps> = ({ size = 'medium' }) => {
  return <div className={`Loader ${size}`}></div>
}
