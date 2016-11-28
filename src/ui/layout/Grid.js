import React from 'react'

const Grid = ({children, fluid}) => {
  return (
    <div className={`l-grid ${fluid ? 'l-grid--fluid' : ''}`}>
      {children}
    </div>
  )
}

export default Grid

Grid.propTypes = {
  children: React.PropTypes.node,
  fluid: React.PropTypes.bool
}
