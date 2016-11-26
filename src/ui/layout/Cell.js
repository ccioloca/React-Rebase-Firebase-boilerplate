import React from 'react'

const Cell = ({ children, type }) => {
    return (
            <div className={`l-grid-cell ${type}`}>
                {children}
            </div>
    )
}

export default Cell

Cell.propTypes = {
  children: React.PropTypes.node,
  type: React.PropTypes.string
}
