import React from 'react'
import styled from 'styled-components'

/* Basic styled page intro component */
const IntroWrapper = styled.section`  
  margin-bottom: 20px;
`
const Intro = props => (
  <IntroWrapper>
    { props.children }
  </IntroWrapper>
)

export default Intro
