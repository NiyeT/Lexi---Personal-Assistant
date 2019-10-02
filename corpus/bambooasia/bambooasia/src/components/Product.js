import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import QtySelector from './QtySelector'
import { CommerceButton } from './Buttons'
import { inject, observer } from 'mobx-react'
import { exampleProductConfig } from '../data/exampleProductConfig'

@inject('cart')
@inject('ui')
@observer
class Product extends Component {
  state = {
    qty: 1,
  }

  onAddCartClick = (product) => {
    const { qty } = this.state
    const { cart, ui } = this.props
    if (qty > 0) {
      const payload = { ...product, qty }
      cart.addToCart(payload)
      ui.openCartModal({
        message: 'Sucessfully added to cart',
      })
    }
  }

  setQty = qty => {
    this.setState({
      qty,
    })
  }

  render() {
    // todo: price needs to come from the brain when the product data is merged
    // currently it's in contentful as a placeholder.
    const { onOpenCustomizeModalClicked } = this.props
    const product = { ...this.props.product, config: exampleProductConfig }
    const { image, title, description, price } = product

    return (
      <ProductContainer>
        {image ? (
          <ProductImageContainer
            onClick={() => onOpenCustomizeModalClicked(product)}
          >
            <Img fluid={image.fluid} />
          </ProductImageContainer>
        ) : null}
        <ContentContainer>
          <Title>{title}</Title>
          {description ? (
            <Description>
              <div
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.html,
                }}
              />
            </Description>
          ) : null}
          <Price>${price.toFixed(2)}</Price>
          <CommerceItems>
            <QtySelector initialQty={1} setQty={this.setQty} />
            <CommerceButton onClick={() => this.onAddCartClick(product)}>
              Add
            </CommerceButton>
            <CommerceButton
              onClick={() => onOpenCustomizeModalClicked(product)}
            >
              Custom
            </CommerceButton>
          </CommerceItems>
        </ContentContainer>
      </ProductContainer>
    )
  }
}

const Title = styled.p`
  font-weight: 700;
  margin: 1em 0;
  color: #58585a;
`

const CommerceItems = styled.div`
  display: flex;
  flex-direction: row;
`

const ContentContainer = styled.div`
  padding: 0 1em 1em;
`

const ProductImageContainer = styled.div`
  cursor: pointer;
`

const ProductContainer = styled.div`
  overflow: hidden;

  img {
    backface-visibility: hidden; /* prevent jump effect when scaling */
  }

  &:hover {
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);

    img {
      transition: transform 0.6s !important;
      transform: scale(1.1);
    }
  }
`

const Description = styled.div`
  margin-bottom: 1em;
`

const Price = styled.p`
  margin-bottom: .5em;
`

export default Product
