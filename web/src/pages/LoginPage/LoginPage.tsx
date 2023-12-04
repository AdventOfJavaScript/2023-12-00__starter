import { Form, InputField, Label, TextField } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

import Button from 'src/components/Button/Button'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import Input from 'src/components/Input/Input'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const LoginPage = () => {
  return (
    <>
      <MetaTags title="Login" description="Login page" />
      <div className="container mx-auto">
        <HeaderWithRulers heading="Login" className="text-white" />
        <Form>
          <Input name="Username" />
          <ShowHidePassword name="password" />
          <Button
            handleClick={() => {
              console.log('clicked')
            }}
            className="
        w-full
      rounded-full bg-supernova py-5 font-handwriting text-3xl uppercase text-black"
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default LoginPage
