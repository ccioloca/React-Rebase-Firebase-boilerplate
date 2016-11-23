import React from 'react'

const AnonymousAvatar = (props) => {
    const { size } = props
    return (
      <svg className={`avatar-svg avatar-svg--${size}`}>
        <rect fill="#a0d36a" x="0" y="0" className={`avatar-svg__rect avatar-svg__rect--${size}`}></rect>
        <text
        fill="#ffffff"
        font-size="12"
        text-anchor="middle"
        x="12"
        y="16">Anon</text>
      </svg>
    )
}

export default AnonymousAvatar

AnonymousAvatar.propTypes = {
  size: React.PropTypes.string
}
