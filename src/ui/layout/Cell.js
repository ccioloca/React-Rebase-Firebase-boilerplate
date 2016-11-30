import React from 'react'

const Cell = ({ children, default, mobile, tablet }) => {

  const mobileClass = mobile && `l-one-${mobile}--mobile`
  const tabletClass = mobile && `l-one-${tablet}--tablet`

  return (
    <div className={`l-grid-cell l-one-${type} ${mobileClass} ${tabletClass}`}>
        {children}
    </div>
  )
}

export default Cell

Cell.propTypes = {
  children: React.PropTypes.node,
  type: React.PropTypes.string,
  mobile: React.PropTypes.string,
  tablet: React.PropTypes.string
}
