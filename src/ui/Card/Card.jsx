import React from 'react'

function Card({children, classes}) {
  return (
    <div className={classes}>{children}</div>
  )
}

export default Card