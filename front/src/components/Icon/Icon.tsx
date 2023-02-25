import chat from '../../assets/img/icon-chat.png'
import money from '../../assets/img/icon-money.png'
import security from '../../assets/img/icon-security.png'
import xmark from '../../assets/img/xmark-solid.svg'
import chevron from '../../assets/img/chevron-up-solid.svg'

export type NameIcons = 'chat' | 'money' | 'security' | 'xmark' | 'chevron'

type IconProps = { name: NameIcons; className?: string }

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  let icon
  switch (name) {
    case 'chat':
      icon = chat
      break
    case 'money':
      icon = money
      break
    case 'security':
      icon = security
      break
    case 'xmark':
      icon = xmark
      break
    case 'chevron':
      icon = chevron
      break
    default:
      throw new Error('not found icon')
  }
  return <img src={icon} alt={`${name} icon`} className={className} />
}
