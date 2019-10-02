import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

const SEO = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            rssMetadata {
              title
            }
          }
        }
      }
    `}
    render={siteData => {
      /**
       * These steps check for seo data and default to the default configs
       * if it doesn't exist so that something is provided.
       */

      // Desconstruct site from siteData
      const { site } = siteData

      // Paracute if not site data exists
      if (!site) return null

      // Return the default SEO content if no data is passed in or exists
      if (!data) {
        // console.log('no data')
        return (
          <Helmet title={site.siteMetadata.title}>
            <html lang="en" />
            <meta name="description" content={site.siteMetadata.description} />
          </Helmet>
        )
      }

      /**
       * If SEO data does exists and was passed in by the parent component then
       * include the data from the seo properties.
       *
       * Set prop values to locally scoped const values and
       * define defaults in case values are not provided by contentful.
       *
       * If any new attributes and/or values are added, be sure to use this same
       * pattern to avoid any unforseen errors
       */

      // Basic Meta Tags
      // Contentful Value First, Config Values second, then null
      const title = data.title
        ? data.title
        : site.siteMetadata.title
        ? site.siteMetadata.title
        : null
      const metaDescription = data.metaDescription
        ? site.siteMetadata.description
        : site.siteMetadata.description
        ? site.siteMetadata.description
        : null

      // Open Graph, Facebook, Twitter, Pintrest
      // Pintrest will pick up the FB OG tags. You can explicitly define those if you like
      const ogType = data.ogType ? data.ogType : 'website'
      const ogTitle = data.ogTitle ? data.ogTitle : null
      const ogDescription = data.ogDescription ? data.ogDescription : null
      const ogURL = data.ogUrl ? data.ogUrl : null
      const ogImage = data.ogImage.fluid.src ? data.ogImage.fluid.src : null
      const ogImageAlt = data.ogImage.title ? data.ogImage.title : null

      return (
        <Helmet title={title}>
          {/* Basic Meta Tags */}
          <meta name="description" content={metaDescription} />

          {/* Google Meta Tags */}
          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={metaDescription} />
          <meta itemProp="image" content={`https:${ogImage}`} />

          {/* Facebook and Pintrest Meta Tags */}
          <meta property="og:type" content={ogType} />
          <meta property="og:title" content={ogTitle} />
          <meta property="og:description" content={ogDescription} />
          <meta property="og:url" content={ogURL} />
          <meta property="og:image" content={`https:${ogImage}`} />
          <meta property="og:image:alt" content={ogImageAlt} />

          {/* Twitter Cards */}
          <meta name="twitter:card" content="Summary" />
          <meta name="twitter:title" content={ogTitle} />
          <meta name="twitter:description" content={ogDescription} />
          <meta name="twitter:image" content={`https:${ogImage}`} />
        </Helmet>
      )
    }}
  />
)

export default SEO;
