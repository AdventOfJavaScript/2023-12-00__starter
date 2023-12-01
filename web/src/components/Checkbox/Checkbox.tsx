import { CheckboxField, Label } from '@redwoodjs/forms'

const Checkbox = ({ name }) => {
  return (
    <div className="field">
      <CheckboxField name={name} />
      <Label name={name}>Send out a reminder for an event</Label>
    </div>
  )
}

export default Checkbox
