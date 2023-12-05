import { useAuth0 } from '@auth0/auth0-react'

import Button from 'src/components/Button'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return <Button handleClick={() => loginWithRedirect()}>Login Here</Button>
}

export default LoginButton
