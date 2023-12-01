import Icon from '../Icon/Icon'

const Upload = ({ name }) => {
  return (
    <div className="flex h-[100px] w-full items-center border-[6px] border-dashed border-white px-8">
      <label
        className="relative top-1 flex flex-1 items-center text-white"
        htmlFor={name}
      >
        Avatar
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          className="hidden"
        />
        <div className="font-base flex-1 text-center font-sans text-lg normal-case tracking-normal text-[#CAE3D7]">
          Drag and Drop an Image
        </div>
      </label>
      <div className="text-white">
        <Icon id="upload" size={32} />
      </div>
    </div>
  )
}

export default Upload
