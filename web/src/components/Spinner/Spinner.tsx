const Spinner = () => {
  return (
    <div>
      <svg
        className="h-10 w-10 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
        ></circle>
        <circle
          className="opacity-75"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={2 * Math.PI * 10}
          strokeDashoffset={2 * Math.PI * 10 * 0.75}
        ></circle>
      </svg>
    </div>
  )
}

export default Spinner
