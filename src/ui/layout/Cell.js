import React from 'react'

const Cell = ({ children, desktop, mobile, tablet }) => {

  const mobileClass = mobile ? `l-one-${mobile}--mobile` : null
  const tabletClass = mobile ? `l-one-${tablet}--tablet` : null

  return (
    <div className={`l-grid-cell l-one-${desktop} ${mobileClass} ${tabletClass}`}>
        {children}
    </div>
  )
}

export default Cell

Cell.propTypes = {
  desktop: React.PropTypes.string,
  mobile: React.PropTypes.string,
  tablet: React.PropTypes.string,
  children: React.PropTypes.node
}
