import { supabase } from 'api/db/supabase'

import { Form, Submit } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import Input from 'src/components/Input/Input'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const SignupPage = () => {
  const [toastMessage, setToastMessage] = React.useState(false)
  const onSubmit = (inputs) => {
    signUpNewUser(inputs)
  }

  async function signUpNewUser(state) {
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
          <Submit
            className="
      w-full
    rounded-full bg-supernova py-5 font-handwriting text-3xl uppercase text-black"
          >
            Submit
          </Submit>
          <div className="align-links	 container mx-auto items-center justify-center">
            <Link to={routes.login()} className="underline">
              Remember your account? Sign in here
            </Link>
            <br />
            <Link to={routes.forgotpassword()} className="underline">
              Forgot Password?
            </Link>
          </div>
        </Form>
      </div>
    </>
  )
}

export default SignupPage
