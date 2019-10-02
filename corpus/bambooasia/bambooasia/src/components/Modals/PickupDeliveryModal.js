import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from 'react-responsive-modal'
import Tabs from '../Tabs'
import PickupTab from '../PickupTab'
import DeliveryTab from '../DeliveryTab'
import { SubmitRow } from '../Forms'
import { CommerceButton, CommerceButtonSecondary } from '../Buttons'
import { inject } from 'mobx-react'
import { ORDER_TYPE_DELIVERY, ORDER_TYPE_PICKUP } from '../../utils/constants'

const ModalContainer = styled.div`
  padding: 0 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FullfillmentStatus = styled.div`
  color: ${props => props.theme.colors.highlight};  
`

@inject("order")
class PickupDeliveryModal extends Component {
  constructor(props) {
    super(props)
    // console.log('props.order.fullfillment.type: ', props.order.fullfillment.type)
    this.state = {
      /*
        these submit/rest flags are used to trigger submit on the child formik
        components from the external save button at the bottom of our parent modal
      */
      pickupSubmit: false,
      deliverySubmit: false,
      resetForm: false,
      activeTab: props.order.fullfillment.type || ORDER_TYPE_PICKUP,
      valid: false,
    }
  }
  submitForm = () => {
    if(this.state.activeTab === ORDER_TYPE_PICKUP) {
      this.setState({ pickupSubmit: true }, () => {
        this.setState({ pickupSubmit: false })
      });
    }
    if(this.state.activeTab === ORDER_TYPE_DELIVERY) {
      this.setState({ deliverySubmit: true }, () => {
        this.setState({ deliverySubmit: false })
      });
    }
  }
  resetForm = () => {
    this.setState({ resetForm: true }, () => {
      this.setState({ resetForm: false })
    });
  }
  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  }
  setValid = (valid) => {
    this.setState({ valid });
  }
  render() {
    const {show, onClose, order} = this.props;

    return (
      <Modal
        open={show}
        onClose={onClose}
        center
        classNames={{
          overlay: 'modal-overlay',
          modal: 'modal-standard',
          closeButton: 'modal-close-button',
        }}
      >
        <ModalContainer>
          <h3>Pickup or Delivery?</h3>
          <Tabs initialTab={this.state.activeTab} setActiveTab={this.setActiveTab}>
            <div label={ORDER_TYPE_PICKUP}>
              <PickupTab isValid={this.setValid} submit={this.state.pickupSubmit} reset={this.state.resetForm} />
            </div>
            <div label={ORDER_TYPE_DELIVERY}>
              <DeliveryTab isValid={this.setValid} submit={this.state.deliverySubmit} reset={this.state.resetForm} />
            </div>
          </Tabs>
          <SubmitRow>
            <FullfillmentStatus>{order.fullfillment.type !== null ? order.orderTypeMessage : '\u00A0' }</FullfillmentStatus>
            <div>
              <CommerceButtonSecondary onClick={this.resetForm}>Reset</CommerceButtonSecondary>
              <CommerceButton disabled={!this.state.valid} onClick={this.submitForm}>Save</CommerceButton>
            </div>
          </SubmitRow>
        </ModalContainer>
      </Modal>
    )
  }
}

export default PickupDeliveryModal
