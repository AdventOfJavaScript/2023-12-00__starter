import { Form } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Button from 'src/components/Button/Button'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import Input from 'src/components/Input/Input'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const LoginPage = () => {
  return (
    <>
      <MetaTags title="Login" description="Login page" />
      <div className="container mx-auto items-center justify-center">
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
          <div className="items-center justify-center ">
            <Link to={routes.signup()} className="underline">
              Need an account?
            </Link>
          </div>
        </Form>
      </div>
    </>
  )
}

export default LoginPage
