import React from 'react'

const Grid = ({children}) => {
  return (
    <div className={`l-grid`}>
      {children}
    </div>
  )
}

export default Grid

Grid.propTypes = {
  children: React.PropTypes.node
}
