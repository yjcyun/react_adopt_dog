import React from 'react'

const Title = ({ title, title2 }) => {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <h4 className="title2">{title2}</h4>
    </div>
  )
}

export default Title;
