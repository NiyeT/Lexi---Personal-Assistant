import React from "react"
import { Link } from 'gatsby'
import { inject, observer } from 'mobx-react'

@inject("auth")
@observer
class Login extends React.Component {

  render() {
    const authenticated = this.props.auth.isAuthenticated

    return (
      <>
        {
          !authenticated && (
            <li>
              <a href="" onClick={this.props.auth.login}>
                Log In
              </a>
            </li>
          )
        }
        {
          authenticated && (
            <>
              <li>
                <Link to="/account">
                  Account
                </Link>
              </li>
            </>
          )
        }
      </>
    )
  }
}

export default Login
