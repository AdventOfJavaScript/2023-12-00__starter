import { useState } from 'react'

import { Label, PasswordField, TextField } from '@redwoodjs/forms'

import Icon from '../Icon/Icon'

const ShowHidePassword = ({ name }) => {
  const [isPasswordShowing, setIsShowPasswordShowing] = useState(false)

  const toggleShowPassword = () => {
    setIsShowPasswordShowing((prevValue) => !prevValue)
  }

  return (
    <div className="field relative">
      <Label name={name}>Label</Label>
      {isPasswordShowing ? (
        <PasswordField name={name} placeholder=" " />
      ) : (
        <TextField name={name} placeholder=" " />
      )}
      <button className="absolute right-6 top-8" onClick={toggleShowPassword}>
        {isPasswordShowing ? (
          <Icon id="eyeClosed" size={32} />
        ) : (
          <Icon id="eyeOpened" size={32} />
        )}
      </button>
    </div>
  )
}

export default ShowHidePassword
