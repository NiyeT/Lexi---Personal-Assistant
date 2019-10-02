import React from "react"
import { navigate } from "gatsby"

import Auth from '../../utils/auth';
const auth = new Auth();

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!auth.isAuthenticated() && location.pathname !== `/account/login`) {
    // If the user is not logged in, redirect to the login page.
    navigate(`/account/login`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
