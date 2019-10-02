import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;

  max-width: 100%;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`

const Container = ({children}) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
