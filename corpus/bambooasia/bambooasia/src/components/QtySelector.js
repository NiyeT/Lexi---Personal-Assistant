import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

// polyfill for IE
Number.isNaN =
  Number.isNaN ||
  function(value) {
    // eslint-disable-next-line no-self-compare
    return value !== value
  }

class QtySelector extends React.Component {
  state = {
    qty: 0,
  }

  constructor(props) {
    super(props)
    this.qtyInput = React.createRef('qty')
    this.setQty = props.setQty
    this.state.qty = props.initialQty || 0
  }

  incrementQty = () => {
    const qty = this.qtyInput.current.value
    if (qty.length > 0 && this.isNumber(qty)) {
      const newQty = parseInt(qty, 10) + 1
      this.setState({
        qty: newQty,
      })
      this.setQty(newQty)
    }
  }

  decrementQty = () => {
    const qty = this.qtyInput.current.value
    if (qty.length > 0 && this.isNumber(qty) && parseInt(qty, 10) > 0) {
      const newQty = parseInt(qty, 10) - 1
      this.setState({
        qty: newQty,
      })
      this.setQty(newQty)
    }
  }

  updateQty = () => {
    const qty = this.qtyInput.current.value
    if (qty.length > 0 && this.isNumber(qty)) {
      this.setState({
        qty: parseInt(qty, 10),
      })
      this.setQty(parseInt(qty, 10))
    } else {
      this.setState({
        qty: 0,
      })
      this.setQty(0)
    }
  }

  isNumber = num => {
    return !Number.isNaN(Number(num))
  }

  render() {
    return (
      <CommerceInputContainer>
        <CommerceQuantityMinus type="button" onClick={this.decrementQty}>
          -
        </CommerceQuantityMinus>
        <CommerceInput
          onChange={this.updateQty}
          onClick={e => e.target.select()}
          type="text"
          value={this.state.qty}
          ref={this.qtyInput}
        />
        <CommerceQuantityPlus type="button" onClick={this.incrementQty}>
          +
        </CommerceQuantityPlus>
      </CommerceInputContainer>
    )
  }
}

const CommerceInputContainer = styled.div`
  display: flex;
`

const CommerceInput = styled.input`
  padding: 0;
  height: 30px;
  width: 40px;
  text-align: center;
  border: 1px solid ${theme.colors.inputBorder};
  &:focus {
    border: 1px solid ${theme.colors.secondary};
  }
`

const CommerceQuantityMinus = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 1px solid ${theme.colors.inputBorder};
  text-align: center;
  line-height: 14px;
  padding: 3px;
  border-right: none;
  &:hover {
    color: ${theme.colors.secondary};
  }
`
const CommerceQuantityPlus = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 1px solid ${theme.colors.inputBorder};
  text-align: center;
  line-height: 14px;
  padding: 3px;
  border-left: none;
  &:hover {
    color: ${theme.colors.secondary};
  }
`

export default QtySelector
