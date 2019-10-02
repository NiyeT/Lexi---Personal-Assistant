import React from 'react'
import styled from 'styled-components'
import Body from "./Body";
import Header from "./Header";

const Catering = ({ title, description, price }) => {
  return (
    <Body>
      <Header>Japan</Header>
      <CateringProductContainer>
        <Column>
          <ProductContainer>
            <img src="/logos/catering.jpg" />
            <ProductPropertyList>
              <Title>{title}</Title>
              <p>{description}</p>
            </ProductPropertyList>
            <CommerceItemsContainer>
              <li>{price}</li>
              <CommerceButton>Build your own station</CommerceButton>
            </CommerceItemsContainer>
          </ProductContainer>
        </Column>
      </CateringProductContainer>
      <Header>Japan</Header>
      <CateringProductContainer>
        <Column>
          <ProductContainer>
            <img src="/logos/catering.jpg" />
            <ProductPropertyList>
              <Title>{title}</Title>
              <p>{description}</p>
            </ProductPropertyList>
            <CommerceItemsContainer>
              <li>{price}</li>
              <CommerceButton>Build your own station</CommerceButton>
            </CommerceItemsContainer>
          </ProductContainer>
        </Column>
      </CateringProductContainer>
    </Body>
  )
}

const CommerceButton = styled.button`
  color: #fff;
  text-align: center;
  display: inline-block;
  border: 2px solid #f26722;
  margin-bottom: 0;
  height: 30px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #f26722;
`;

const CommerceItemsContainer = styled.div`
      padding: 0 1em 1em;
`;

const ProductPropertyList = styled.div`
  padding: 0 1em 1em;
`;

const ProductContainer = styled.div`
  width: 800px;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
`;

const CateringProductContainer = styled.div`

`;

const Column = styled.div`
  flex: 0 0 66.666%;
  @media (max-width: ${props => props.theme.responsive.large}) {
    flex: 0 0 100%;
  }
  margin-right: auto;
    margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const Title = styled.p`
  font-weight: 600;
  font: 14px/30px "BrownProBold",sans-serif;
  margin: 1em 0;
`;

export default Catering
