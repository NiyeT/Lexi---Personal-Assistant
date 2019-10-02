import React from 'react'
import { Link } from 'gatsby'

const MenuLink = props => (
  <Link to={`${props.link.path ? props.link.path : '/'+props.link.pageLinks[0].slug}`}>
    {props.link.displayText}
  </Link>
)

export default MenuLink
