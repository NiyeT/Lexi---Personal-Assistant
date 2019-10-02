import { graphql } from 'gatsby'

export const queryHero = graphql`
fragment hero on ContentfulHero {
  name
  slug
  title
  subTitle
  summary
  video
  image {
    title
    description
    fluid(maxWidth:1920) {
      ...GatsbyContentfulFluid
    }
  }
  slideshow {
      ...slideshow
  }
}
`
