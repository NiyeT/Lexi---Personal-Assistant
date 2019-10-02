import { graphql } from 'gatsby'

export const slideshowQuery = graphql`
fragment slideshow on ContentfulSlideshow {
  name
  slug
  slides {
    ...slide
  }
}
`

export const querySlide = graphql`
    fragment slide on ContentfulSlide {
        name
        slug
        headline
        subHeadline
        image {
            title
            description
            fluid(maxWidth:1920) {
                ...GatsbyContentfulFluid
            }
        }
    }
`
