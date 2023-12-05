import { Label, TextField } from '@redwoodjs/forms'

const Input = ({ name }) => {
  return (
    <div className="field relative">
      <Label name={name}>{name}</Label>
      <TextField name={name} placeholder=" " />
    </div>
  )
}

export default Input
