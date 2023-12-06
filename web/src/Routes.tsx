import { PrivateSet, Route, Router, Set } from '@redwoodjs/router'

import AuthLayout from './layouts/AuthLayout/AuthLayout'
import InteriorLayout from './layouts/InteriorLayout/InteriorLayout'

// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
const Routes = () => {
  return (
    <Router>
      <PrivateSet unauthenticated="login">
        <Set wrap={InteriorLayout}>
          <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        </Set>
      </PrivateSet>
      <Set wrap={AuthLayout}>
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgotpassword" page={ForgotPasswordPage} name="forgotpassword" />
        <Route path="/logout" page={LogoutPage} name="logout" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/event" page={EventPage} name="event" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
