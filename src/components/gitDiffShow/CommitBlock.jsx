import React from "react"
import { formatChanges } from "./compareLogic"

const CommitBlock = ({ change }) => {
  const compare = change.changes
  const compareResult = formatChanges(compare)
  console.log("show compare result", compareResult)

  return (
    <div>
      {compareResult.map(line => {
        line.map((record, index) => {
            // TODO handle the changes displays logic
          return index === 0 ? <div className="key">{record}</div> : <div className="value">{record}</div>
        })
      })}
    </div>
  )
}
export default CommitBlock
