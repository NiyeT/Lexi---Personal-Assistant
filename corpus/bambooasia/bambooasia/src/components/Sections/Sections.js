/**
 * Sections
 * Sections represent the horizontal rows on the page.
 * This loops over the sections array and passes data to the section object.
 */
import React, { Component } from 'react'
import Section from './Section'

export default class Sections extends Component {
  render() {

    const { data } = this.props
    if (!data) return null
    
    return (
      <>
      {
        data.map((section,index) => (
          <Section key={index} data={section}/>
        ))
      }
      </>
    )
  }
}
