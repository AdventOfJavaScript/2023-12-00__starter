import { Label, TextField } from '@redwoodjs/forms'

const Input = ({ name, isInvalid = false }) => {
  return (
    <div className={`field relative ${isInvalid ? 'invalid' : ''}`}>
      <Label name={name}>{name}</Label>
      <TextField name={name} placeholder=" " required />
    </div>
  )
}

export default Input
