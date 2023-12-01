import { useState } from 'react'

interface HamburgerProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Hamburger = ({ handleClick }: HamburgerProps) => {
  const [isHamburger, setIsHamburger] = useState(true)

  const toggleNav = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsHamburger((prevValue) => !prevValue)
    handleClick(event)
  }

  return (
    <button
      className="inline-flex h-[58px] w-[68px] flex-col items-center justify-center bg-supernova"
      onClick={toggleNav}
    >
      <div
        className={`absolute h-[3px] w-12 bg-black transition-transform ${
          isHamburger ? '-translate-y-3' : ' rotate-45'
        }`}
      />
      <div
        className={`absolute h-[3px] w-12 bg-black transition-opacity ${
          isHamburger ? '' : 'hidden'
        }`}
      />
      <div
        className={`absolute h-[3px] w-12 bg-black transition-transform ${
          isHamburger ? 'translate-y-3' : '-rotate-45'
        }`}
      />
    </button>
  )
}

export default Hamburger
