import Icon from '../Icon/Icon'

export interface RoundButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  status: 'success' | 'error' | 'warning'
}

const RoundButton = ({ handleClick, status }: RoundButtonProps) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleClick(event)
  }

  return (
    <button
      className={`h-16 w-16 rounded-full status-${status} center border-2 border-white  ${
        status === 'error' ? 'rotate-45' : ''
      } ${status === 'warning' ? 'text-black' : 'text-white'}`}
      onClick={onClick}
    >
      <Icon id="plus" />
    </button>
  )
}

export default RoundButton
