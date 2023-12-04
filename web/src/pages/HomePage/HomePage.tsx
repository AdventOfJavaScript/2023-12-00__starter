import { Auth0Provider } from '@auth0/auth0-react'

import { MetaTags } from '@redwoodjs/web'

import AuthLayout from 'src/layouts/AuthLayout/AuthLayout'

import LoginButton from './Login'
import LogoutButton from './Logout'

const HomePage = () => {
  return (
    <>
      <AuthLayout>
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
            <LoginButton />
            <LogoutButton />
          </p>
        </Auth0Provider>
      </AuthLayout>
    </>
  )
}

export default HomePage
