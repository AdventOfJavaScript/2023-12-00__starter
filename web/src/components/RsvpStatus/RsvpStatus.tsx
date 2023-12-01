import Button from '../Button/Button'
import Icon from '../Icon/Icon'

interface RsvpStatusProps {
  clearFilter?: {
    isShowing: boolean
    handleClick: () => void
  }
  count: number
  disabled?: boolean
  status: 'success' | 'error' | 'warning'
  heading: string
}

const RsvpStatus = ({
  clearFilter,
  count,
  disabled = false,
  status,
  heading,
}: RsvpStatusProps) => {
  return (
    <div
      className={`status-${status} h-[120px] w-full border-[6px] border-white ${
        disabled ? 'opacity-50' : ''
      }`}
    >
      <div className="flex gap-3">
        <div className="relative -left-2 -top-14">
          <div className="outline-text number-with-outline relative z-0">
            {count}
          </div>
          <div className="number-with-outline absolute left-0 top-0 z-10">
            {count}
          </div>
        </div>
        <div
          className={`relative pt-10 font-handwriting text-3xl uppercase ${
            status === 'warning' ? 'text-black' : 'text-white'
          }`}
        >
          {clearFilter?.isShowing && (
            <Button
              size="small"
              handleClick={() => {}}
              className={`absolute -top-2 whitespace-nowrap ${
                status === 'success' ? 'bg-countyGreen' : ''
              } ${status === 'warning' ? 'bg-spicyMustard text-white' : ''} ${
                status === 'error' ? 'bg-cognac' : ''
              }`}
            >
              <div className="flex items-center gap-1 font-sans">
                <Icon id="close" />
                Clear Filter
              </div>
            </Button>
          )}
          {heading}
        </div>
      </div>
    </div>
  )
}

export default RsvpStatus
