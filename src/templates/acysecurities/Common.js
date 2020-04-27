import React from 'react'
import { graphql } from 'gatsby'

const Common = ({ data }) => {
    const content = data.markdownRemark
    console.log('content in acyasia here', content);
    // console.log('can i got the context here',context);
    return (
        <div className='securites-wrapper'>
            <h1>acyasia</h1>
            {console.log('acyasia google analytics')}
            <div>
                <img src={content.frontmatter.thumbnail} />
                <h2>{content.frontmatter.title}</h2>
                <p>{content.frontmatter.enContent}</p>
                <p>{content.frontmatter.cnContent}</p>
            </div>
        </div>
    )
}

export default Common

export const commonQuery = graphql`
    query securitiesQuery ($path:String!){
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter{
                title
                  date
                  path
                  author
                  thumbnail
                  cnContent
                  enContent
            }
        }
    }
` 