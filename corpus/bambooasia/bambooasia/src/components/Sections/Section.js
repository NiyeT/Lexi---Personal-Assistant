/**
 * Section
 * The section component is responsible for rendering the individual section.
 *
 * THIS IS WHERE YOU WILL ACTUALLY STYLE A SECTION
 */

import React, { Component } from 'react'
import Blocks from '../Blocks/Blocks'
import { Column, Row } from '../Grid'
import Header from '../Header'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Spacer from '../Spacer'

export default class Section extends Component {
  render() {

    const { data } = this.props
    if (!data) return null

    /**
     * Deconstruct data and set default values
     * These values can be checked and used when determining whether or not to
     * return a component that uses the element. This is important because components that use the data
     * will have some styling and they shouldn't be used if there's no data. Otherwise the styling be rendered
     * and no data will be available to fill the empty space.
     */
    const headline = data.headline ? data.headline : null
    const subHeading = data.subHeading ? data.subHeading : null
    const body = data.body ? data.body.childMarkdownRemark.html : null
    const blocks = data.contentBlocks ? data.contentBlocks : null
    const image = data.image ? data.image : null

    return (
      <>
        <div style={{background:data.backgroundColor}}>
        {
          /**
           * Only render page elements if there is a value.
           */
        }
          {(data.slug === 'horizontal-line-spacer') ?
            <Spacer>
              {body ? <div dangerouslySetInnerHTML={{ __html: body }}/> : null}
            </Spacer> :
            (
              <>
                { body ?
                <Row sectionType={data.sectionType}>
                  <Column>
                    {headline ? <Header>{headline}</Header> : null}
                    {subHeading ? <h2>{subHeading}</h2> : null}
                    <ContentContainer>
                      {body ? <TextContainer><div dangerouslySetInnerHTML={{ __html: body }}/></TextContainer> : null}
                    </ContentContainer>
                  </Column>
                  {image ? <Column><Img fluid={image.fluid}/></Column> : null}
                </Row> : null }
              </>
            )
          }
          {
            /**
             * Add Blocks to the section if any are available
             */
            blocks ? <Blocks sectionType={data.sectionType} data={blocks}/> : null
          }

        </div>
      </>
    )
  }
}

const ContentContainer = styled.div`
  padding-bottom: 10px;
`;

const TextContainer = styled.div`
  margin-bottom: 33px;
`;
