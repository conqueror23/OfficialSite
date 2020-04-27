/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const acyasiaTemplate = path.resolve('src/templates/acyasia/Common.js')
    const acyindoTemplate = path.resolve('src/templates/acyindo/Common.js')
    const acysecuritiesTemplate = path.resolve('src/templates/acysecurities/Common.js')

    return graphql(`
    {
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  date
                  path
                  author
                  cnContent
                  enContent
                }
                html
              }
            }
          }
    }
    `).then(res => {
        if (res.errors) return Promise.reject(res.errors)
        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            const path = node.frontmatter.path
            console.log('path in md files', path, path.includes('acyasia'));

            if (path.includes('acyasia')) {
                console.log('entering asia');
            } else if (path.includes('acysecurities') === true) {
                console.log('entering acysecurities');
            } else {
                console.log('entering acyindo');
            }
        })
    })
}