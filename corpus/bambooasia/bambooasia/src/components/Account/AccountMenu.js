import React, { Component } from 'react'
import { Link } from 'gatsby'
import { inject, observer } from 'mobx-react'

@inject("auth")
@observer
class AccountMenu extends Component {
  render() {
    return (
      this.props.auth.isAuthenticated ? <ul>
        <Link to="/account/profile">
          Profile
        </Link>
        &nbsp;|&nbsp;
        <Link to="/account/orders">
          Orders
        </Link>
        &nbsp;|&nbsp;
        <a href="" onClick={this.props.auth.logout}>
          Log out
        </a>
      </ul> : null
    )
  }
}

export default AccountMenu
