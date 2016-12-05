import React from 'react'

const Flag = ({ imageSrc, children, size }) => {

  const imageSize = size ? `l-flag__image--${size}` : ''

  return (
    <div className="l-flag">
      <div className={`l-flag__image ${imageSize}`}>
        <img src={imageSrc}
             role="presentation" />
      </div>
      <div className="l-flag__body">
        {children}
      </div>
    </div>
  )
}

export default Flag

Flag.propTypes = {
  imageSrc: React.PropTypes.string.isRequired,
  children: React.PropTypes.node,
  size: React.PropTypes.string
}
