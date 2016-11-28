import React from 'react'

const Container = ({children, size}) => {
  return (
    <div className={`l-container l-container--${size}`}>
      {children}
    </div>
  )
}

export default Container

Container.propTypes = {
  children: React.PropTypes.node,
  size: React.PropTypes.string
}
