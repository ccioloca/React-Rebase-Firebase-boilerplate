import React from 'react'

const Flag = ({ imageSrc, body, size }) => {

  const imageSize = size ? `l-flag__image--${size}` : null

  return (
    <div className="l-flag">
      <div className={`l-flag__image ${imageSize}`}>
        <img src={imageSrc}
             role="presentation" />
      </div>
      <div className="l-flag__body">
        <h3 className="message-list__display-name">test</h3>
        <p className="message-list__date">test</p>
        <p className="message-list__message">test</p>
      </div>
    </div>
  )
}

export default Flag

Flag.propTypes = {
  imageSrc: React.PropTypes.string.isRequired,
  body: React.PropTypes.node,
  size: React.PropTypes.string
}
