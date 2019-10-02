import { graphql } from 'gatsby'

export const fragmentProductQuery = graphql`
  fragment product on ContentfulProduct {
    name
    title
    slug
    catering
    image {
        title
        description
        fluid(maxWidth:600) {
            ...GatsbyContentfulFluid
        }
    }
    description {
        childMarkdownRemark {
          html
        }
      }
  }
`
