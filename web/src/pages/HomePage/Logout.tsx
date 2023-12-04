import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

import Button from 'src/components/Button'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <Button
      handleClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  )
}

export default LogoutButton
