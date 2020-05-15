import React from "react"
import './showDiffComponent.css'
import CommitBlock from "../commitBlock/CommitBlock"

const ShowDiffComponent = ({ record }) => {
  const { commit, date, files, id } = record
  return (
    <div className='showdiff-wrapper'>
        <div className='showdiff-header'>
        <p>Commit: {commit}</p>
      <p>{date}</p>
      <p>{id}</p>
        </div>
      <div className='showdiff-commit-block'>
        <p>Changes</p>
        {files && files.length > 0 ? (
            files.map((change,index)=>{
                return (
                    <CommitBlock change={change} key={index} />
                )
            })
        )
         : (
          "No Changes So Far"
        )}
      </div>
    </div>
  )
}
export default ShowDiffComponent
