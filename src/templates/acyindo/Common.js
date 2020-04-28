import React from 'react'
import { graphql } from 'gatsby'
import Regulations from '../../components/Regulations'
const  Common = ({ data }) => {
    const content = data.markdownRemark
    console.log('content in acyasia here', content);
    console.log('can we get the data here',commonQuery)
    return (
        <div className='indo-wrapper'>
            <h1>acyasia</h1>
            {console.log('acyasia google analytics')}
            <div>
            {/* <img src={content.frontmatter.thumbnail}/> */}
            <div className="regulations">
                <h2>Regulations</h2>
                <Regulations lang='en'/>
            </div>
                <h2>{content.frontmatter.title}</h2>
                <p>{content.frontmatter.enContent}</p>
                <p>{content.frontmatter.cnContent}</p>
            </div>
        </div>
    )
}

export default Common

export const commonQuery = graphql`
    query indoQuery ($path:String!){
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter{
                title
                  date
                  path
                  author
                  lang
                  thumbnail
                  cnContent
                  enContent
            }
        }
    }
` 