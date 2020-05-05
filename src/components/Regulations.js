import React from "react"
import { useStaticQuery,graphql } from "gatsby"

const Regulations = ({lang}) => { 
    const data = useStaticQuery(graphql `
    query allData {
        allMarkdownRemark(filter: {frontmatter: {path: {eq: "/regulations"}}}) {
          edges {
            node {
              id
              frontmatter {
                aiscCn
                aiscEn
                vsfcCn
                vsfcEn
              }
            }
          }
        }
      }
    `)
  const regulation = data.allMarkdownRemark.edges[0].node.frontmatter
  console.log("allData", lang)
  return (
    <div>
      {lang==='en'?regulation.aiscEn:regulation.aiscCn}
        
    </div>
  )
}


export default Regulations
