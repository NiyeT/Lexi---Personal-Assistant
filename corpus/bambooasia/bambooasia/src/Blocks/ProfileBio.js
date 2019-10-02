import React, { Component } from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image'

export default class ProfileBioRenderType extends Component {

  render() {
    // console.log('profileBio here!', this.props.data)
    const { data } = this.props
    if (!data) return null

    const headline = data.headline ? data.headline : null
    const subHeading = data.subHeading ? data.subHeading : null
    const body = data.body ? data.body.childMarkdownRemark.html : null
    const images = data.images ? data.images : null

    return (
      <div>
        {images && images.length ? <Img fluid={images[0].fluid}/> : null}
        <ChefDescription>
          { headline ? <ChefName>{headline}</ChefName> : null }
          { subHeading ? <ChefTitle>{subHeading}</ChefTitle> : null }
          { body ? <div dangerouslySetInnerHTML={ {__html:body} }/> : null }
        </ChefDescription>
      </div>

    )
  }
}

const ChefDescription = styled.div`
  border: 1px solid #e5e5e5;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 24px;
`;

const ChefName = styled.h4`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 16px;
`;

const ChefTitle = styled.div`

`;
