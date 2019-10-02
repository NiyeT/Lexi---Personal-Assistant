import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import styled from 'styled-components'
import { inject } from 'mobx-react'
import Img from 'gatsby-image'
import CustomizeProductForm from '../Forms/CustomizeProductForm'

@inject('ui')
class CustomizeModal extends Component {
  render() {
    const {show, onClose, ui} = this.props;
    const product = ui.customizeProduct;

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
        { product != null ?
          (
            <>
              <ImageContainer>
                { product.image ? <Img fluid={product.image.fluid}/> : null}
              </ImageContainer>
              <Container>
                <CustomizeProductForm product={product} />
              </Container>
            </>
          )
          : <div> No product to customize </div> }
      </Modal>

    )
  }
}

const Container = styled.div`
  padding: 0 1em;
`

const ImageContainer = styled.div`
  width: calc(100% + 2.4rem);
  border-radius: 5px 5px 0 0;
  height: 300px;
  position: relative;
  top: -1.2rem;
  left: -1.2rem;
  right: -1.2rem;
  
  .gatsby-image-wrapper {
    position: static !important;
    height: 100%;
  }
`

export default CustomizeModal
