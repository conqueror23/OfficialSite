import React from "react"
import './showDiff.css'
import CommitBlock from "./CommitBlock"

const ShowDiffComponent = ({ record }) => {
  const { commit, date, files, id } = record
  return (
    <div className='showdiff-wrapper'>
        <div className='showdiff-header'>
        <h3>Commit: {commit}</h3>
      <p>{date}</p>
      <p>{id}</p>
        </div>
      <div>
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
