import { Form } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

import Button from 'src/components/Button/Button'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const ForgotPasswordPage = () => {
  return (
    <>
      <MetaTags title="Forgot Password" description="forgot password page" />
      <div className="container mx-auto	">
        <HeaderWithRulers heading="Forgot Password?" className="text-white" />
        <Form>
          <ShowHidePassword name="new password" />
          <ShowHidePassword name="confirm password" />
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

export default ForgotPasswordPage
