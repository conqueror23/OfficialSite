import React from "react"
import { useStaticQuery,graphql } from "gatsby"

const Regulations = ({lang}) => { 
    const data = useStaticQuery(graphql `
    query allData {
        allMarkdownRemark(filter: {frontmatter: {path: {eq: "/regulations"} , aisc: {}}}) {
          edges {
            node {
                id
                frontmatter {
                  title
                  path
                  tile
                  thumbnail
                  lang
                  aisc {
                    en
                    cn
                  }
                  vsfc {
                    en
                    cn
                  }
                }
              }
          }
        }
      }
    `)
  const standard ='aisc';
  const regulation = data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <div>
      {regulation[standard][lang]}
    </div>
  )
}


export default Regulations
