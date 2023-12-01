interface ButtonProps {
  children: JSX.Element | string
  className?: string
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: 'large' | 'medium' | 'small'
}

const Button = ({
  children,
  className = '',
  handleClick,
  size = 'large',
}: ButtonProps) => {
  return (
    <button
      className={`
        rounded-full
      ${
        size === 'large'
          ? 'w-full py-5 font-handwriting text-3xl uppercase'
          : ''
      }
      ${
        size === 'medium'
          ? 'inline-block h-12 px-8 text-lg font-bold uppercase'
          : ''
      }
      ${
        size === 'small'
          ? 'inline-block h-8 px-4 text-sm font-bold uppercase'
          : ''
      }
      ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
