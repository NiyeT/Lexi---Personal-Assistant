import React, { Component, Fragment } from 'react'
import Product from '../components/Product'
import { inject, observer } from 'mobx-react'

@inject('ui')
@observer
class ProductRenderType extends Component {
  state = {
    qty: 1,
  }

  onOpenCustomizeModal = product => {
    const { ui } = this.props
    ui.openCustomizeModal(product)
  }

  onCloseCustomizeModal = () => {
    const { ui } = this.props
    ui.closeCustomizeModal()
  }

  setQty = qty => {
    this.setState({
      qty,
    })
  }

  setValue = value => {
    this.setState({
      value,
    })
  }

  render() {
    const { data } = this.props
    if (!data) return null
    return (
      <Fragment>
        <Product product={data} onOpenCustomizeModalClicked={this.onOpenCustomizeModal} />
      </Fragment>
    )
  }
}

export default ProductRenderType
