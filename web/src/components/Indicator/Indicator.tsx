import Icon from '../Icon/Icon'

interface IndicatorProps {
  status: 'success' | 'error' | 'warning'
}

const Indicator = ({ status }: IndicatorProps) => {
  return (
    <>
      {status === 'success' && (
        <div className="indicator bg-spanishGreen text-white">
          <Icon id="check" size={16} />
        </div>
      )}

      {status === 'error' && (
        <div className="indicator bg-orangeRed text-white">
          <Icon id="minus" size={16} />
        </div>
      )}

      {status === 'warning' && (
        <div className="indicator bg-supernova text-black">
          <Icon id="question" size={16} />
        </div>
      )}
    </>
  )
}

export default Indicator
