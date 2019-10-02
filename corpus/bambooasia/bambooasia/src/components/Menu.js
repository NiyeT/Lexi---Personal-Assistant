import React, { Fragment } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/header-logo.png'
import logoMobile from '../images/header-logo-mobile.png'
import { slide as BurgerMenu } from 'react-burger-menu'
import MenuLink from './MenuLink'
import Login from './Account/Login'
import Cart from './Cart'

class Menu extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
        query {
          contentfulNav(slug: { eq: "top-nav" }) {
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
            <MenuWrapper>
              <Nav className="nav-wide">
                <ul>
                  {links.map((link, index) => {
                    return (
                      <Fragment key={index}>
                        <li>
                          <MenuLink link={link} />
                        </li>
                        {index === 2 ? (
                          <Link to="/">
                            <Image src={logo} />
                          </Link>
                        ) : null}
                      </Fragment>
                    )
                  })}
                  <Login />
                  <Cart />
                </ul>
              </Nav>
              <div className="nav-mobile">
                <MobileLogo>
                  <Link to="/">
                    <ImageMobile src={logoMobile} />
                  </Link>
                </MobileLogo>
                <BurgerMenu right styles={burgerMenuStyles}>
                  <li>
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  {links.map((link, index) => {
                    return (
                      <Fragment key={index}>
                        <li>
                          <MenuLink link={link} />
                        </li>
                      </Fragment>
                    )
                  })}
                  <Login />
                  <Cart />
                </BurgerMenu>
              </div>
            </MenuWrapper>
          )
        }}
      />
    )
  }
}

const MenuWrapper = styled.div`
  margin: 1em 0 2em;

  .nav-mobile {
    position: relative;
    height: 57px;
    
    a {
      color:White;
      text-decoration: none;
      outline:none;
    }
  }

  @media (min-width: ${props => props.theme.responsive.medium}) {
    .nav-wide {
      display: block;
    }
    .nav-mobile {
      display: none;
    }
  }
  @media (max-width: ${props => props.theme.responsive.medium}) {
    .nav-wide {
      display: none;
    }
    .nav-mobile {
      display: block;
    }
  }
`

const Nav = styled.nav`
  margin: 0 auto;
  padding: 0 1.5em;

  a {
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    color: #58585a;
    text-decoration: none;
    line-height: 100px;
    outline: none;
    letter-spacing: 0.78px;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  li {
    display:  flex;
    flex-wrap: nowrap;
    padding: 0 24px;
  }
`

const Image = styled.img`
  width: 195px;
  margin: 0 auto;
`

const ImageMobile = styled.img`
  max-width: 100%;
  height: auto;
`

const MobileLogo = styled.div`
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
  width: 75%;
  left: 20px;
`

const burgerMenuStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '20px',
    top: '16px',
  },
  bmBurgerBars: {
    background: '#f26722',
  },
  bmBurgerBarsHover: {
    background: '#f26722',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#58585a',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: 'white',
    padding: '0 20px',
  },
  bmItem: {
    borderTop: '1px solid rgba(150,150,150,.15)',
    color: 'white',
    display: 'block',
    textDecoration: 'none',
    fontSize: '13px',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

export default Menu
