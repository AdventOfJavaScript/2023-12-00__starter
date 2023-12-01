import Avatar from '../Avatar/Avatar'

const EmptyCard = () => {
  return (
    <div className="relative ml-5 w-full bg-vistaBlue py-6 pl-[72px] pr-5">
      <div className="absolute -left-5 top-4">
        <Avatar icon="eyeClosed" />
      </div>
      <div>
        <div className="mb-3 h-7 w-3/4 bg-padua" />
        <div className="h-[14px] w-1/2 bg-padua" />
      </div>
    </div>
  )
}

export default EmptyCard
