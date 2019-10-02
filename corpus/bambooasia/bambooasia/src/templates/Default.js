/* eslint-disable no-unused-vars,camelcase */
import React, { Component } from 'react'
import { graphql } from 'gatsby'

// Import Custom Components
import SEO from '../components/SEO'
import Container from '../components/Container'
import Sections from '../components/Sections/Sections'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Body from '../components/Body'
import Intro from '../components/Intro'
import Hero from '../components/Hero'

export default class Default extends Component {
  render() {
    const { location, children } = this.props;

    // Callback doesn't need nav etc, so return early
    if (location.pathname === '/callback') {
      return (
        <div>
          <Container>
            {children()}
          </Container>
        </div>
      )
    }

    // Deconstruct data from props
    const { data } = this.props
    // if data does not exist then return null to avoid errors
    if (!data) return null
    // console.log('page data: ', data);

    // deconstruct out the contentful data attributes and objects
    const {
      name,
      slug,
      seo,
      headline,
      subHeading,
      body,
      hero,
      pageSections,
      contentful_id,
    } = data.contentfulPage

    // console.log('pageSections: ', pageSections);

    return (
      <Layout>
        <Helmet>
          <title>{`Home - ${config.siteTitle}`}</title>
        </Helmet>
        {/**
         * SEO
         * Requires the seo data object. If no seo object is added then it will
         * default to a few simple items that are defined in /utils/siteConfig.js file
         * which is referenced in the gatsby-config.js file
         *  */}
        <SEO data={seo} />
        <Body>
        <Hero data={hero}/>
        <div className="content">
          {/**
           * I used your Container to wrap the page template.
           * which, as you defined, renders everything out as children of that component
           */}
          <Container>
            {/**
             * Direct Page Components
             * Here I'm just using the data from the page. Notice that I'm using a ternary
             * to make the visibiliy of these elements optional. The idea is that they should not
             * show up at all if they don't have values in contentful.
             */}
            {(body || headline || subHeading) ? (
              <>
                <Intro>
                  {headline ? <h1>{headline}</h1> : null}
                  {subHeading ? <h2>{subHeading}</h2> : null}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: body ? body.childMarkdownRemark.html : null,
                    }}
                  />
                </Intro>
              </>
            ) : null}
            {
              /**
               * Sections
               * Page sections are where all sections and blocks are rendered. This is typically the
               * main body content of the page... where all the real magic happens.
               */
            }
            <Sections data={pageSections} />
          </Container>
        </div>
        </Body>
      </Layout>
    )
  }
}

/**************************************************
 * Add the data layer with GraphQL
 * DO NOT Name the query. If you do,
 * be aware that duplicate query names will
 * cause a build error
 *************************************************/

export const pageQueryGraphQL = graphql`
  query($slug: String) {
    # Include the page data using the slug defined in contentful
    contentfulPage(slug: { eq: $slug }) {
      ...page
    }
  }
`
