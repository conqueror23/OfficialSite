import React from 'react'
import { graphql } from 'gatsby'
import {ifEn} from '../langHelper'

const Common = ({ data }) => {
    const content = data.markdownRemark
    console.log('content in acyasia here', content);
    
    const isEn=ifEn(content.frontmatter.lang);
    return (
        <div className='securites-wrapper'>
            <h1>acyasia</h1>
            {console.log('acyasia google analytics')}
            <div>
                <img src={content.frontmatter.thumbnail} alt="img lost"/>
                <h2>{content.frontmatter.title}</h2>
                <p>{isEn?content.frontmatter.enContent:content.frontmatter.cnContent}</p>
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
                  lang
                  thumbnail
                  cnContent
                  enContent
            }
        }
    }
` 