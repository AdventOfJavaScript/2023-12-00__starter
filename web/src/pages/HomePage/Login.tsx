import Button from 'src/components/Button'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return <Button handleClick={() => loginWithRedirect()}>Login Here</Button>
}

export default LoginButton
