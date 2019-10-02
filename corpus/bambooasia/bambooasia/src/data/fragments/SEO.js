import { graphql } from 'gatsby'

export const seoQuery = graphql`
fragment seo on ContentfulSeo {
  name
  slug
  title
  metaDescription
  ogTitle
  ogURL
  ogDescription
  ogImage {
    title
    description
    fluid (maxWidth:720) {
      ...GatsbyContentfulFluid
    }
  }
}
`