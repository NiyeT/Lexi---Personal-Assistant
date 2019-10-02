import React, { Component } from 'react'

export default class DefaultRenderType extends Component {

  render() {
    const { data } = this.props
    if (!data) return null

    const headline = data.headline ? data.headline : null
    const subHeading = data.subHeading ? data.subHeading : null
    const body = data.body ? data.body.childMarkdownRemark.html : null

    return (
      <>
        { headline ? <h3>{headline}</h3> : null }
        { subHeading ? <h4>{subHeading}</h4> : null }
        { body ? <div dangerouslySetInnerHTML={ {__html:body} }/> : null }
      </>

    )
  }
}
