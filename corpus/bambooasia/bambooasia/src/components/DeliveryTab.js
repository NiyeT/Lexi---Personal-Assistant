import React, { Component } from 'react';
import styled from 'styled-components'
import PickupDeliveryForm from './Forms/PickupDeliveryForm'

import {
  ORDER_TYPE_DELIVERY
} from '../utils/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Intro = styled.div`
  padding-bottom: 1em;
  width: 90%;
`

class DeliveryTab extends Component {
  render() {
    return (
      <Container>
        <Intro>
          <p>Delivery is available from 11:30am to 8pm Monday - Friday.  Please allow 30 minutes for preparation, and 1 hour for orders over 30 people.</p>
        </Intro>
        <PickupDeliveryForm
          type={ ORDER_TYPE_DELIVERY }
          setParentValid={this.props.isValid}
          submit={this.props.submit}
          reset={this.props.reset}
        />
      </Container>
    );
  }
}


export default DeliveryTab;
