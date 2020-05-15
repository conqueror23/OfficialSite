import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ShowDiffComponent from './showDiff/ShowDiffComponent'
import './gitDiffResult.css'

const GitDiffResult = () => {
  const gitDiff = useStaticQuery(graphql`
    query GitDiff {
      allGitDiffCommit {
        edges {
          node {
            id
            commit
            date
            message
            files {
              changes
            }
          }
        }
      }
    }
  `)
  const diffs = gitDiff.allGitDiffCommit.edges
if(diffs.length>0){
    return (
        <div className='getdiff-wrapper'>
            {
                diffs.map((record,index)=>{
                    return (
                        <ShowDiffComponent record={record.node} key ={index}/>
                    )
                })
            }
        </div>
      )
}else{
    return (
        <div>
            <p>
                There are no commits in repos
            </p>
        </div>
    )
}
 
}

export default GitDiffResult
