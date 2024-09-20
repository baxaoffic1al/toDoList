import React from 'react'

function Button({children, classes, type, disabled, click}) {
  return (
    <button type={type} disabled={disabled} className={classes} onClick={click}>{children}</button>
  )
}

export default Button