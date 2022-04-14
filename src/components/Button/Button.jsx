import React from 'react'

const Button = ({className, children,style,type,onClick}) => {
  return (
    <button className={`btn ${className}`} style={style} type={type} onClick={onClick}>{children}</button>
  )
}

export default Button