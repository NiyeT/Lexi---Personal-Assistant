import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import PeaceLogo from "../components/PeaceLogo";
import NewsLetter from "../components/NewsLetter";

import NotifyModal from './Modals/NotifyModal'
import { inject, observer } from 'mobx-react'
import PickupDeliveryModal from './Modals/PickupDeliveryModal'
import CustomizeModal from './Modals/CustomizeModal'

@inject("ui")
@observer
class Layout extends Component {
  constructor({ children, props }) {
    super(props)
    this.children = children
  }

  onCloseNotifyModal = () => {
    this.props.ui.closeNotifyModal()
  }

  onCloseDeliveryModal = () => {
    this.props.ui.closeDeliveryModal()
  }

  onCloseCustomizeModal = () => {
    this.props.ui.closeCustomizeModal()
  }

  render() {
    const { ui } = this.props;

    return (
      <div className="siteRoot">
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href={favicon} />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
        </Helmet>

        <ThemeProvider theme={theme}>
          <>
            <div className="siteContent">
              <Banner />
              <Menu />
              {this.children}
              <PeaceLogo />
              <NewsLetter />
            </div>
            <Footer />
            <CustomizeModal show={ui.customizeModalIsVisible} onClose={this.onCloseCustomizeModal} />
            <PickupDeliveryModal show={ui.deliveryModalIsVisible} onClose={this.onCloseDeliveryModal} />
            <NotifyModal show={ui.notifyModalIsVisible} onClose={this.onCloseNotifyModal} type="alert">
              {ui.notifyMessage}
            </NotifyModal>
          </>
        </ThemeProvider>
        <GlobalStyle />
      </div>
    )
  }
}

export default Layout
