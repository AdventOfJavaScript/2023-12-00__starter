import { supabase } from 'api/db/supabase'

import { Form } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Button from 'src/components/Button/Button'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import Input from 'src/components/Input/Input'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const LoginPage = () => {
  const onSubmit = (inputs) => {
    signIn(inputs)
    onLogin()
  }
  const onLogin = () => {
    navigate(routes.dashboard())
  }
  async function signIn(state) {
    console.log(state)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: state.Email,
      password: state.Password,
    })
    console.log(data.user.role)
  }
  return (
    <>
      <MetaTags title="Login" description="Login page" />
      <div className="container	 mx-auto items-center justify-center">
        <HeaderWithRulers heading="Login" className="text-white" />
        <Form onSubmit={onSubmit}>
          <Input name="Email" />
          <ShowHidePassword name="Password" />
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
          <div className="container	 mx-auto items-center justify-center ">
            <Link to={routes.signup()} className="underline">
              Need an account?
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

export default LoginPage
