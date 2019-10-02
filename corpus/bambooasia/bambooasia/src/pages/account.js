import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Account/Profile"
import Orders from "../components/Account/Orders"
import Login from "../components/Account/Login"
import PrivateRoute from "../components/Account/PrivateRoute"
import AccountMenu from "../components/Account/AccountMenu"
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Body from '../components/Body'
import Container from '../components/Container'

const Account = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>{`Account - ${config.siteTitle}`}</title>
      </Helmet>
      <Body>
      <Container>
        <AccountMenu />
        <Router>
          <PrivateRoute path="/account/profile" component={Profile} />
          <PrivateRoute path="/account/orders" component={Orders} />
        </Router>
        <Login />
      </Container>
      </Body>
    </Layout>
  )
}

export default Account
