/* eslint-disable no-unused-vars,camelcase */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Body from '../components/Body';
import Hero from '../components/Hero';
import Sections from '../components/Sections/Sections'
import Instagram from "../components/Instagram"
import { graphql } from 'gatsby'

class Index extends Component {
  render() {
    // Deconstruct data from props
    const { data } = this.props
    // if data does not exist then return null to avoid errors
    if (!data) return null
    console.log('home page data: ', data);

    // deconstruct out the contentful data attributes and objects
    const {
      seo,
      hero,
      pageSections,
      contentful_id,
    } = data.contentfulPage

    // console.log('home pageSections: ', pageSections);

    return (
      <Layout>
        <Helmet>
          <title>{`Home - ${config.siteTitle}`}</title>
        </Helmet>
        <SEO data={seo} />
        <Body>
          <Hero data={hero}/>
          <Sections data={pageSections} />
          <Instagram />
        </Body>
      </Layout>
    )
  }
}

export const pageQueryGraphQL = graphql`
    query {
        # Include the page data using the slug defined in contentful
        contentfulPage(slug: { eq: "home" }) {
            ...page
        }
    }
`

export default Index;
