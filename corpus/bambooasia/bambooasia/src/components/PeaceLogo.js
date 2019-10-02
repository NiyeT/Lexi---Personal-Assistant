import React from 'react'
import styled from 'styled-components'

const PeaceLogo = () => (
  <LogoContainer>
    <Img src="/logos/bamboo-peace.png" />
  </LogoContainer>
)

export default PeaceLogo

const Img = styled.img`
`;

const LogoContainer = styled.div`
  max-width: 200px;
  height: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;