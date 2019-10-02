import { graphql } from 'gatsby'

export const assetQuery = graphql`
fragment asset on ContentfulAsset {
  title
  description
  file {
    url
    fileName
    contentType
    details {
      size
      image {
        width
        height
      }
    }
  }
}
`