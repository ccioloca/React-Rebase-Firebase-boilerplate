import React from 'react'

const Cell = ({ children, desktop, mobile, tablet }) => {

  const mobileClass = mobile ? `l-${mobile}--mobile` : ''
  const tabletClass = tablet ? `l-${tablet}--tablet` : ''

  return (
    <div className={`l-grid-cell l-${desktop} ${mobileClass} ${tabletClass}`}>
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
