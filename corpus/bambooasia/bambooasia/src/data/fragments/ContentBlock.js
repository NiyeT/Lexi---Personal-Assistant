import { graphql } from 'gatsby'

export const contentBlockQuery = graphql`
fragment contentBlock on ContentfulContentBlocks {
  name
  slug
  contentful_id
  type
  headline
  subHeading
  body {
    childMarkdownRemark {
      html
    }
  }
  images {
    title
    description
    fluid(maxWidth:1920) {
      ...GatsbyContentfulFluid
    }
  }
  callToAction {
    ...link
  }
  # blocks {
  #   ...nav
  #   ...link
  # }
  assets {
    ...asset
  }
}
`