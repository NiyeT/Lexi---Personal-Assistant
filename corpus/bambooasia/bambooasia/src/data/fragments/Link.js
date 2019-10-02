import { graphql } from 'gatsby'

export const fragmentLinkQuery = graphql`
  fragment link on ContentfulLinks {
    name
    slug
    type
    displayText
    path
    url
    target
    pageLinks {
      ...pageLinks
    }
    subLinks {
      ...subLinks
    }    
  }
`

export const fragmentSubLinkQuery = graphql`
  fragment subLinks on ContentfulLinks {
    name
    slug
    type
    displayText
    path
    url
    target
  }
`

export const fragmentPageLinks = graphql`
  fragment pageLinks on ContentfulPage {
    id
    name
    slug
    headline
    subHeading
    contentful_id
  }
`
