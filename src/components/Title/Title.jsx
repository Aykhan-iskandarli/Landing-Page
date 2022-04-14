import React from 'react'

const Title = ({topText,mainText,desc}) => {
  return (
    <div className='title_component'>
        <span>{topText}</span>
        <h2>{mainText}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default Title