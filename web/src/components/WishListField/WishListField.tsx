import RoundButton, { RoundButtonProps } from '../RoundButton/RoundButton'

interface WishListFieldProps {
  roundButton: RoundButtonProps
  name: string
  number: number
}

const WishListField = ({ roundButton, name, number }: WishListFieldProps) => {
  return (
    <div className="grid grid-cols-2 items-center gap-x-5 gap-y-2">
      <div className="flex flex-1 items-center bg-white pl-8">
        <div>
          <label htmlFor={name} className="text-3xl">
            {number}
          </label>
        </div>
        <input
          type="text"
          id={name}
          name={name}
          className="font-bold outline-none"
        />
      </div>
      <RoundButton {...roundButton} />
      <div className="flex items-start gap-2 pl-8">
        <img src="/images/l-bracket.svg" alt="" />
        <div className="flex flex-1 items-center bg-white">
          <div className="pl-6">
            <label htmlFor={`${name}-url`}>URL</label>
          </div>
          <input
            type="text"
            className="short flex-1"
            name={`${name}-url`}
            id={`${name}-url`}
          />
        </div>
      </div>
    </div>
  )
}

export default WishListField
