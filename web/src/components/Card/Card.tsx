import Avatar, { type AvatarProps } from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

export interface CardProps {
  avatar: AvatarProps
  handleClose?: (event: React.MouseEvent) => void
  email: string
  isCloseShowing?: boolean
  name: string
}

const Card = ({
  avatar,
  handleClose,
  isCloseShowing = false,
  email,
  name,
}: CardProps) => {
  return (
    <div className="relative ml-5 w-[calc(100%-20px)] bg-white py-6 pl-[72px] pr-5">
      {isCloseShowing && (
        <button
          className="absolute right-2 top-2 text-bombay"
          onClick={(event) => handleClose(event)}
        >
          <Icon id="close" />
        </button>
      )}
      <div className="absolute -left-5 top-4">
        <Avatar {...avatar} />
      </div>
      <div>
        <div className="font-sans text-3xl font-bold tracking-tight">
          {name}
        </div>
        <div className="tracking-tight">{email}</div>
      </div>
    </div>
  )
}

export default Card
