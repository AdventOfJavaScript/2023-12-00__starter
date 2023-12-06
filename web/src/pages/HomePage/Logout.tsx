import React from 'react'

import Button from 'src/components/Button'

const LogoutButton = () => {
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
