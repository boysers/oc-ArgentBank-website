import { Icon, NameIcons } from '../../../../components'

type FeatureProps = React.PropsWithChildren<{
  title: string
  icon: NameIcons
  content: string
}>

export const Feature: React.FC<FeatureProps> = ({ title, icon, content }) => {
  return (
    <div className="feature-item">
      <Icon name={icon} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  )
}
