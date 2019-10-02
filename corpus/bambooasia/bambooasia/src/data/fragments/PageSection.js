import { graphql } from 'gatsby'

export const pageSectionQuery = graphql`
fragment pageSection on ContentfulPageSections {
  name
  slug
  sectionType
  contentful_id
  headline
  subHeading
  video
  body {
    childMarkdownRemark {
      html
    }
  }
  image {
    title
    description
    fluid(maxWidth:1920) {
      ...GatsbyContentfulFluid
    }
  }
  contentBlocks {
    ...contentBlock
    ...product
  }
}
`
