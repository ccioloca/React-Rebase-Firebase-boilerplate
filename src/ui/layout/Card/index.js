import React from 'react'

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  )
}

export default Card

Card.propTypes = {
  children: React.PropTypes.node
}
