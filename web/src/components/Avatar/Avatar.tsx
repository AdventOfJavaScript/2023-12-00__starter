import Icon from '../Icon/Icon'
import Indicator from '../Indicator/Indicator'

export interface AvatarProps {
  letter?: string
  alt?: string
  avatar?: string
  showSantaHat?: boolean
  indicator?: 'success' | 'error' | 'warning' | null
  icon?: string
}

const Avatar = ({
  letter,
  indicator = null,
  alt,
  avatar,
  icon,
  showSantaHat = false,
}: AvatarProps) => {
  return (
    <div className="relative inline-block">
      {avatar ? (
        <img
          src={avatar}
          alt={alt}
          className="h-18 w-18 rounded-full border-avatar border-white object-cover"
        />
      ) : icon ? (
        <div className="flex h-18 w-18 items-center justify-center rounded-full border-avatar border-vistaBlue bg-spanishGreen text-2xl font-bold uppercase text-white">
          <Icon id={icon} size={32} />
        </div>
      ) : (
        <div className="center center h-18 w-18 rounded-full border-avatar border-white bg-spanishGreen text-2xl font-bold uppercase text-white">
          {letter}
        </div>
      )}
      {showSantaHat && (
        <img
          src="/images/santa-hat.png"
          alt="Santa Hat"
          className="absolute -right-[15px] -top-[19px]"
        />
      )}
      {indicator && (
        <div className="absolute bottom-0 right-0">
          <Indicator status={indicator} />
        </div>
      )}
    </div>
  )
}

export default Avatar
