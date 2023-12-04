import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LogoutPage = () => {
  return (
    <>
      <MetaTags title="Logout" description="Logout page" />

      <h1>LogoutPage</h1>
      <p>
        Find me in <code>./web/src/pages/LogoutPage/LogoutPage.tsx</code>
      </p>
      <p>
        My default route is named <code>logout</code>, link to me with `
        <Link to={routes.logout()}>Logout</Link>`
      </p>
    </>
  )
}

export default LogoutPage
