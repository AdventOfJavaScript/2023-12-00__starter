import { MetaTags } from '@redwoodjs/web'

import LoginPage from '../LoginPage/LoginPage'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home Page" />
      <LoginPage></LoginPage>
    </>
  )
}

export default HomePage
