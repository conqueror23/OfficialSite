/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')


exports.createPages = ({ actions, graphql }) => {
    const { createPage, createJobV2 } = actions;

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
            if (url.includes('acyasia')) {
                createPage({
                    path: node.frontmatter.path,
                    component: acyasiaTemplate,
                    context: {
                        pagePath: url
                    }
                })
            } else if (url.includes('acysecurities') === true) {
                createPage({
                    path: node.frontmatter.path,
                    component: acysecuritiesTemplate,
                    context: {
                        pagePath: url
                    }
                })
            } else {
                createPage({
                    path: node.frontmatter.path,
                    component: acyindoTemplate,
                    context: {
                        pagePath: url
                    }
                })
            }
        })
    })
}


exports.onPostBuild = ({ reporter }) => {
    reporter.info(`You have tried to build the static site here and you may got the prints`)
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    // TODO at least we can do this using backend recalls each time but does this has a hot load way of doing this?
    // Ideas pretend this human is the result from backend and we may use this as
    const devTeams = [
        { name: "guichi", role: "devs" },
        { name: "cath", role: "devs" },
        { name: "krystal", role: 'devs' },
        { name: "bruce", role: "devs" },
        { name: "june", role: "test" }, 
    ];
    devTeams.forEach(team => {
        const node = {
            name: team.name,
            role: team.role,
            id: createNodeId(`human-${team.name}`),
            internal: {
                type: "Human",
                contentDigest: createContentDigest(devTeams)
            },
        }
        actions.createNode(node);
    })

}
// exports.createWrite =({data})=>{
//     data.forEach(record =>{
//         const node = {
//             name:record.name,
//             id:createNodeId(`data-${record.name}`),
//             internal:{
//                 type:"WriteData",
//                 contentDigest:createContentDigest(data)
//             },
//         }
//         actions.createNode(node)
//     })    
// }