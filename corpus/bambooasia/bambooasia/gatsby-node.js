const path = require('path')

exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  switch (stage) {
    case "build-html":
      actions.setWebpackConfig({
        plugins: [
            plugins.define({
              "global.GENTLY": false
            })
        ]
      })
      break;
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(async (resolve, reject) => {
    /**
     * *** PAGE ********************************************************************
     * Type         : Template
     * Description  : Creates a page for each "Page" content type in contentful
     *******************************************************************************/

    const pages = await graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
    )

    pages.data.allContentfulPage.edges.forEach(({node}) => {
      if(node.slug !== 'home') {
        createPage({
          path: `${node.slug}`,
          component: path.resolve('./src/templates/Default.js'),
          context: {
            slug: node.slug
          }
        })
      }
    })

    // Resolve the promise to build the page
    resolve()
  })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"

    // Update the page.
    createPage(page)
  }
}
