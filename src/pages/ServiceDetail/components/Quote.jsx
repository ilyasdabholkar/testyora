import React from 'react'

function Quote(props) {
  return (
    <blockquote>
    <p>
      {props.text}
    </p>
  </blockquote>
  )
}

export default Quote