import React from 'react'
import { graphql } from 'gatsby'
import Regulations from '../../components/Regulations'
import './asia.css'
const Common = ({ data,context }) => {
    const content = data.markdownRemark

    return (
        <div className='asia-wrapper'>
            <h1>acyasia</h1>
            {console.log('acyasia google analytics')}
            <div className='body-wrapper'>
                <div className="regulation-wrapper">
                    <h2>Regulation part</h2>
                    <Regulations lang='zh'/>
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
    query asiaQuery ($path:String!){
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter{
                title
                  date
                  path
                  lang
                  author
                  thumbnail
                  cnContent
                  enContent
            }
        }
    }
` 