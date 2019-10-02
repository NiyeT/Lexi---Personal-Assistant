import React, { Fragment } from 'react'
import styled from 'styled-components'
import Body from "./Body";
import Container from './Container';
import MenuLink from './MenuLink'
import { graphql, StaticQuery } from 'gatsby'
import theme from '../styles/theme';

const Footer = () => {
  return (
  <StaticQuery
    query={graphql`
        query {
          contentfulNav(slug: { eq: "bottom-nav" }) {
            name
            slug
            links {
              ...link
            }
          }
        }
      `}
    render={data => {
      /**
       * How to access and use the data
       * This is just here as an example of how you can access the data
       * from the graphql static query and use it.
       */

      // console.log(data)

      // I always do this check to make sure that data exists otherwise return null
      if (!data) return null
      const { links } = data.contentfulNav

      return (
        <FooterBodyBackground>

        <Body>
        <Container>
          <FooterContainer>
            <AnchorList>
              {links.map((link, index) => {
                return (
                  <Fragment key={index}>
                    <li>
                      <MenuLink link={link} />
                    </li>
                  </Fragment>
                )
              })}
            </AnchorList>
            <CopyrightContainer>
              <Copyright>
                Copyright © 2019. Bamboo Asia. All Rights Reserved | Find us on <Link href="https://www.instagram.com/bambooasia/" target="_blank" rel="noopener noreferrer">Instagram</Link>
              </Copyright>
              <Link>Back to Top</Link>
            </CopyrightContainer>
          </FooterContainer>
        </Container>
        </Body>
        </FooterBodyBackground>
      )
    }}
  />
  )
}

export default Footer

const FooterBodyBackground = styled.div`
  background: ${theme.colors.secondary};
  color: ${theme.colors.secondaryLight};
`;

const Link = styled.a`
color: ${theme.colors.bright};
cursor: pointer;
&:hover {
  color: ${theme.colors.bright};
}
`;

const Copyright = styled.div`

`;

const CopyrightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: ${props => props.theme.responsive.medium}) {
    flex-direction: column;
  }
`;

const FooterContainer = styled.div`
  border-top: 1px solid #e5e5e5;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  margin-top: 116px;
 
`;

const AnchorList = styled.div`
  display: flex;
  flex-direction: row;
  
  a {
    margin-right: 1em;
    color: #ffffff;
  }
`;
