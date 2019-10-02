import React, { Component } from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import {
  ORDER_TYPE_PICKUP_OR_DELIVERY
} from '../utils/constants'

const BannerContainer = styled.div`
  color: #31708f;
  background-color: #d9edf7;
  padding: 15px;
  border: 1px solid #bce8f1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BannerMessage = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
`

@inject("ui")
@inject("order")
@observer
class Banner extends Component {

  onPickupDeliveryclick = () => {
    this.props.ui.openDeliveryModal()
  }

  render() {
    const { order } = this.props
    return (
      <BannerContainer>
        <BannerMessage><p>Welcome! Log in to save order history and billing information.
        &nbsp;<a href="" onClick={this.onPickupDeliveryclick}>{order.fullfillment.type !== null ? order.orderTypeMessage : ORDER_TYPE_PICKUP_OR_DELIVERY }</a></p></BannerMessage>
      </BannerContainer>
    )
  }
}

export default Banner
