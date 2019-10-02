import React from 'react'
import styled from 'styled-components'

const SpacerContainer = styled.div`
  margin-bottom: 50px;
  
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ebebeb;   
  }
`

const Spacer = props => {
  return (
    <SpacerContainer>
      {props.children}
    </SpacerContainer>
  )
}

export default Spacer
