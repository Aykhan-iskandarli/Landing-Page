import React from 'react'

const Hamburger = ({setOpen,open}) => {
  return (
    <div className="hamburger" onClick={() => setOpen(!open)}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  )
}

export default Hamburger