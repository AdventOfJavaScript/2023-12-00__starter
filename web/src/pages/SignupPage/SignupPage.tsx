import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SignupPage = () => {
  return (
    <>
      <MetaTags title="Signup" description="Signup page" />

      <h1>SignupPage</h1>
      <p>
        Find me in <code>./web/src/pages/SignupPage/SignupPage.tsx</code>
      </p>
      <p>
        My default route is named <code>signup</code>, link to me with `
        <Link to={routes.signup()}>Signup</Link>`
      </p>
    </>
  )
}

export default SignupPage
