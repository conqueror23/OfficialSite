import React from "react"
import './diffLine.css'

const LineShow = ({ line }) => {
  return (
    <>
      <div className='line-title'>{line[0]}</div>
      <div className='line-content'>{line[1]}</div>
    </>
  )
}
const DiffLine = ({ line }) => {
  if (line[0].includes("-")) {
    return (
      <div className="old-version">
        <LineShow line={line} />
      </div>
    )
  } else if (line[0].includes("+")) {
    return (
      <div className="new-version">
        <LineShow line={line} />
      </div>
    )
  } else {
    return (
      <div className="unChangedVersion">
        <LineShow line={line} />
      </div>
    )
  }
}

export default DiffLine
