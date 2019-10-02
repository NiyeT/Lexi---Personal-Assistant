import { graphql } from 'gatsby'

export const fragmentNavQuery = graphql`
  fragment nav on ContentfulNav {
    name
    slug
    links {
      ...link
    }
  }
`