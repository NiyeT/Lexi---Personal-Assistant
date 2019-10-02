import React from "react"
import Modal from 'react-responsive-modal'
import styled from 'styled-components'
import theme from './../styles/theme';
import Img from 'gatsby-image'
import { CommerceButton } from './Buttons'
import { inject, observer } from 'mobx-react'
import NotifyModal from './Modals/NotifyModal';
// import QtySelector from './QtySelector'

@inject("cart")
@inject("ui")
@observer
class Cart extends React.Component {
  state = {
    showDeleteAlert: false,
    selectedProduct: null,
  }

  onOpenCartModal = () => {
    this.props.ui.openCartModal()
  }

  onCloseCartModal = () => {
    this.props.ui.closeCartModal()
  }

  onEditClick = (product) => {
    this.props.ui.openCustomizeModal(product, 'edit');
  }

  onRemoveClick = (product) => {
    this.setState({
      showDeleteAlert: true,
      selectedProduct: product,
    })
  }

  onDeleteConfirmClick = () => {
    this.props.cart.removeFromCart(this.state.selectedProduct)
    this.setState({ showDeleteAlert: false })
  }

  onClearCartClick = () => {
    this.props.cart.clearCart();
  }

  renderAttributes = (attributes) => {
    return attributes.map((attr, idx) => (
      attr.qty > 0 ?
      <LineItemAttribute key={attr.slug}>
        <span>{attr.label} { attr.qty > 1 ? <span>x {attr.qty}</span> : null }</span>
      </LineItemAttribute> :
      null
    ))
  }

  render() {
    const { showDeleteAlert } = this.state;
    const { cart, ui } = this.props;

    return (
      <>
        <li>
          <CartLink href="" onClick={() => this.onOpenCartModal()}>
            <i className="fa fa-shopping-cart" />
            <CartCount>Cart({cart.count})</CartCount>
          </CartLink>
        </li>
        <Modal
          open={ui.cartModalIsVisible}
          onClose={this.onCloseCartModal}
          classNames={{
            overlay: 'modal-overlay',
            modal: 'modal-standard',
            closeButton: 'modal-close-button',
          }}
          center
        >
          <CartContainer>
            <h4>My order</h4>
            {cart.products.length > 0 ? (
              <>
                {ui.cartMessage ? <div>{ui.cartMessage}</div> : null}
                <OrderContents>
                  { cart.products.map((product, idx) => {
                    const { name, qty, price, image, config } = product;
                    return (
                      <LineItem key={idx}>
                        <LineItemImage> {image ? <LineItemImageFluid fluid={image.fluid} /> : null} </LineItemImage>
                        <LineItemContents>
                          <LineItemName><strong>{name}</strong></LineItemName>
                          { this.renderAttributes(config.base) }
                          { this.renderAttributes(config.protein) }
                          { this.renderAttributes(config.veggies) }
                          { this.renderAttributes(config.sauces) }
                          { this.renderAttributes(config.toppings) }
                          { config.comments }
                        </LineItemContents>
                        <LineItemPrice>${price.toFixed(2)}</LineItemPrice>
                        <LineItemQty>x {qty}</LineItemQty>
                        <LineItemActions>
                          <a href="" onClick={() => this.onEditClick(product)}><i className="fa fa-pen" /></a>
                          <a href="" onClick={() => this.onRemoveClick(product)}><i className="fa fa-trash" /></a>
                        </LineItemActions>
                      </LineItem>
                    )
                  })}
                </OrderContents>
                <SubTotal>
                  <div>{cart.count} Items</div>
                  <div>Subtotal: ${cart.orderTotal.toFixed(2)}</div>
                </SubTotal>
                <CartFooter>
                  <CommerceButton onClick={() => this.onClearCartClick()}> Clear Cart</CommerceButton>
                  <CommerceButton>Check Out</CommerceButton>
                </CartFooter>
              </>
            ):
              <div>
                Cart is empty.
              </div>
          }
          </CartContainer>
        </Modal>
        <NotifyModal show={showDeleteAlert} type="alert" onClose={() => this.setState({ showDeleteAlert: false })}>
          <span>Are you sure you want to remove this item?</span>
          <span>
            <CommerceButton onClick={() => this.setState({ showDeleteAlert: false })}>Cancel</CommerceButton>
            <CommerceButton onClick={() => this.onDeleteConfirmClick()}>Remove</CommerceButton>
          </span>
        </NotifyModal>
      </>
    )
  }
}

const SubTotal = styled.div`
  display: flex;
  justify-content: flex-end;

  & div:first-child {
    margin-right: 10px;
  }
`

const LineItemActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35px;

  i {
    line-height: unset;
  }
`;

const CartFooter = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: flex-end;
  & button:first-child {
    margin-right: 10px;
  }
`;

const LineItemImageFluid = styled(Img)`
  width: 100%;
  max-width: 150px;
`;

const LineItemContents = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: ${props => props.theme.responsive.small}) {
    min-width: 100px;
  }
`;

const LineItemName = styled.div`
  margin-bottom: .2em;
`;

const LineItemAttribute = styled.div`
  line-height: 160%;
`;

const LineItemImage = styled.div`
  display: flex;
  margin-right: 10px;
  min-width: 150px;

  @media (max-width: ${props => props.theme.responsive.medium}) {
    min-width: 100px;
  }

  @media (max-width: ${props => props.theme.responsive.small}) {
    display: none;
  }
`;

const LineItemQty = styled.div`
  display: flex;
  width: 40px;
`;

const LineItemPrice = styled.div`
  display: flex;
  width: 100px;
  justify-content: flex-start;

  @media (max-width: ${props => props.theme.responsive.small}) {
    min-width: 60px;
  }

`;


const OrderContents = styled.div`
  margin-top: 1em;
`;

const LineItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: .5em;
  margin-bottom: 1em;
  border-bottom: 1px solid ${theme.colors.tertiary};
`;


const CartLink = styled.a`
  cursor: pointer;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const CartCount = styled.span`
  margin-left: 6px;
`;

const CartContainer = styled.div`
  padding: 1em;
`;

export default Cart
