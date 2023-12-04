import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ForgotPasswordPage = () => {
  return (
    <>
      <MetaTags title="Forgot Password" description="Forgot Password page" />

      <h1>ForgotpasswordPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ForgotPasswordPage/ForgotPasswordPage.tsx</code>
      </p>
      <p>
        My default route is named <code>forgotpassword</code>, link to me with `
        <Link to={routes.forgotpassword()}>Forgotpassword</Link>`
      </p>
    </>
  )
}

export default ForgotPasswordPage
