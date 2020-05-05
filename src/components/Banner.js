import React from 'react'

const Banner = ({title, title2, subtitle, children, banner}) => {
  return (
    <div className={banner}>
      <h1>{title}</h1>
      <h1 className="banner-title2">{title2}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  )
}

export default Banner
