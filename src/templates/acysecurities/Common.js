import React from 'react'
import { graphql } from 'gatsby'
import {ifEn} from '../langHelper'
import './securities.css'
import Regulations from '../../components/Regulations'
const Common = ({ data }) => {
    const content = data.markdownRemark
   
    const isEn=ifEn(content.frontmatter.lang);
    return (
        <div className='securites-wrapper'>
            <h1>acyasia</h1>
            {console.log('acyasia google analytics')}
            <div>
                <div className='regulation-wrapper'>
                    <h2>Regulation part</h2>
                    <Regulations lang="en"/>
                </div>
                <img src={content.frontmatter.thumbnail} />
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