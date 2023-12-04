import { Auth0Provider } from '@auth0/auth0-react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import LoginButton from './Login'
import LogoutButton from './Logout'

const HomePage = () => {
  return (
    <>
      <Auth0Provider
        domain={process.env.AUTH0_DOMAIN}
        clientId={process.env.AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <MetaTags title="Home" description="Home Page" />

        <h1>Login Here</h1>
        <p>
          {/* My default route is named <code>home</code>, link to me with `
          <Link to={routes.home()}>Home</Link> */}
          <LoginButton />
          <LogoutButton />
        </p>
      </Auth0Provider>
    </>
  )
}

export default HomePage
