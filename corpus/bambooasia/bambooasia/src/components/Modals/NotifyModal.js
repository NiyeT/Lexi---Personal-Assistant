import React from 'react'
import styled from 'styled-components'
import Modal from 'react-responsive-modal'

const AlertContainer = styled.div`
  width: 80vw;
  max-width: 480px;
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

const NotifyModal = props => {
  return (
    <Modal
      open={props.show}
      onClose={props.onClose}
      center
      classNames={{
        overlay: 'modal-overlay',
        modal: 'modal-standard',
        closeButton: 'modal-close-button',
      }}
    >
      <AlertContainer>
        {props.children}
      </AlertContainer>
    </Modal>
  )
}

export default NotifyModal
