import { useAuth } from 'src/auth'

const SignoutBtn = () => {
  const { logOut } = useAuth()

  const onClick = () => {
    logOut()
  }
  return <button onClick={() => onClick()}>Sign Out</button>
}

export default SignoutBtn
