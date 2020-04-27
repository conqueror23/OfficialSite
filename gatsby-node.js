/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')


exports.createPages = ({ actions, graphql }) => {
    const { createPage,createJobV2} = actions;
   
    const acyasiaTemplate = path.resolve('src/templates/acyasia/Common.js')
    const acyindoTemplate = path.resolve('src/templates/acyindo/Common.js')
    const acysecuritiesTemplate = path.resolve('src/templates/acysecurities/Common.js')

    return graphql(`
    {
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  lang
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
            const url = node.frontmatter.path
            console.log('path in md files', url, url.includes('acyasia'));
            if (url.includes('acyasia')) {
                createPage({
                    path: node.frontmatter.path,
                    component: acyasiaTemplate,
                    context:{
                        pagePath:url
                    }
                })
            } else if (url.includes('acysecurities') === true) {
                createPage({
                    path: node.frontmatter.path,
                    component: acysecuritiesTemplate,
                    context:{
                        pagePath:url
                    } 
                })
            } else {
                createPage({
                    path: node.frontmatter.path,
                    component: acyindoTemplate,
                    context:{
                        pagePath:url
                    }
                })
            }
        })
    })
}