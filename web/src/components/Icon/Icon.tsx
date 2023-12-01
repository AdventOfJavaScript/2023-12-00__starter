const Icon = ({ id, size = 24 }): JSX.Element => {
  return (
    <svg width={size} height={size}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon
