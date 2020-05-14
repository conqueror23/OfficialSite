import React from "react"
import { formatChanges } from "./compareLogic"

const CommitBlock = ({ change }) => {
  const compare = change.changes
  const compareResult = formatChanges(compare)
  console.log('show compare result',compareResult)
  return <div></div>
}
export default CommitBlock
