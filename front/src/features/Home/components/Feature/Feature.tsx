import { Icon, NameIcons } from '../../../../components'

type FeatureCardProps = React.PropsWithChildren<{
  title: string
  icon: NameIcons
  content: string
}>

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, content }) => {
  return (
    <div className="feature-item">
      <Icon name={icon} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  )
}
