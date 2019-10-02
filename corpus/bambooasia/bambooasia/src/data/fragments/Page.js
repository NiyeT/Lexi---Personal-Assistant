import { graphql } from 'gatsby'

export const pageQuery = graphql`
  fragment page on ContentfulPage {
    name
    slug
    contentful_id
    headline
    subHeading
    body {
      childMarkdownRemark {
        html
      }
    }
    hero {
      ...hero
    }
    seo {
      ...seo
    }
    pageSections {
      ...pageSection
    }
  }
`