import { PrivateSet, Route, Router, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import InteriorLayout from './layouts/InteriorLayout/InteriorLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <PrivateSet unauthenticated="login">
        <Set wrap={InteriorLayout}>
          <Route path="/dashboard" page={DashboardPage} name="dashboard" />
          <Route path="/group/invite/{id:String}" page={EventInvitePage} name="invite" />
          <Route path="/event" page={EventPage} name="event" />
        </Set>
      </PrivateSet>
      <Set wrap={AuthLayout}>
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgotpassword" page={ForgotPasswordPage} name="forgotpassword" />
        <Route path="/logout" page={LogoutPage} name="logout" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
