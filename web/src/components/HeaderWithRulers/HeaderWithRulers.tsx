const HeaderWithRulers = ({ className, heading }) => {
  return (
    <div
      className={`with-rulers font-condensed text-7xl uppercase ${className}`}
    >
      {heading}
    </div>
  )
}

export default HeaderWithRulers
