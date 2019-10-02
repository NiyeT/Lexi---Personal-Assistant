/**
 Blocks lays out the blocks in a section based on sectionType
 */

import React, { Component } from 'react'
import Block from './Block'
import { Row, Column, ThreeColumnGrid } from '../Grid'

export default class Blocks extends Component {
  render() {

    const { data } = this.props
    if (!data) return null

    // default for 2 blocks is half and half flex layout
    // ordering is determined by order of content block
    // in contentful rather than layout type like a section

    let colLayout = 'flex';
    if(data.length > 2) {
      colLayout = 'grid';
    }

    // console.log('colLayout: ', colLayout)

    return (
      <>
        {colLayout === 'flex' ?
          <Row>
            {
              data.map((block, index) => (
                <Column key={index}>
                  <Block data={block}/>
                </Column>
              ))
            }
          </Row>
        :
          // we only have three column grid right now, when we add more
          // check the sectionType for what kind of grid it is and show the
          // proper component based on sectionType
          <ThreeColumnGrid>
            {
              data.map((block, index) => (
                <Block key={index} data={block}/>
              ))
            }
          </ThreeColumnGrid>
        }
      </>
    )
  }
}
