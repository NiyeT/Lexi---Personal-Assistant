import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import "../styles/overrides.css";
import styled from 'styled-components'
import '../utils/validations'
import PickupDeliveryForm from './Forms/PickupDeliveryForm'

import {
  STORE_LOCATION_MONTGOMERY,
  ORDER_TYPE_PICKUP
} from '../utils/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`

class PickupTab extends Component {
  render() {
    return (
      <div>
        <p>When would you like to pick up your order?</p>
        <Container>
          {/* TODO: store selector for choosing location */}
          <p><strong>Pickup Location: {STORE_LOCATION_MONTGOMERY}</strong></p>
          <PickupDeliveryForm
            type={ ORDER_TYPE_PICKUP }
            setParentValid={this.props.isValid}
            submit={this.props.submit}
            reset={this.props.reset}
          />
        </Container>
      </div>
    );
  }
}

export default PickupTab;
