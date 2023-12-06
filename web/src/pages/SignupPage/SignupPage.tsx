import { supabase } from 'api/db/supabase'

import { Form } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import Button from 'src/components/Button/Button'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import Input from 'src/components/Input/Input'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const SignupPage = () => {
  const [toastMessage, setToastMessage] = React.useState(false)
  const onSubmit = (inputs) => {
    signUpNewUser(inputs)
  }

  async function signUpNewUser(state) {
    console.log(state)
    const { data, error } = await supabase.auth.signUp({
      email: state.Email,
      password: state.Password,
      options: {
        data: {
          name: state.Name,
        },
      },
    })
    if (error == null) {
      setToastMessage(true)
    }
  }

  return (
    <>
      <MetaTags title="Signup" description="sign up page" />
      <Toaster />
      <div className="container	 mx-auto">
        <HeaderWithRulers heading="Sign Up" className="text-white" />
        <Form onSubmit={onSubmit}>
          <Input name="Name" />
          <Input name="Email" />
          <ShowHidePassword name="Password" />
          <Button
            handleClick={() => {
              console.log('hi')
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

export default SignupPage
