import React from "react"
import { formatChanges } from "../compareLogic"
import './commitBlock.css'
import DiffLine from './diffLine/DiffLine'

const CommitBlock = ({ change }) => {
  const compare = change.changes
  const compareResult = formatChanges(compare)
  return (
    <div className='commit-block-wrapper'>
      {compareResult.map((line,key) => {
        return <DiffLine line ={line} key={key}/>
      })}
    </div>
  )
}
export default CommitBlock
