import React from 'react'
import Avatar from '../Avatar'
import Text from './translations'

const UserButton = ({ onClick, displayName, photoURL }) => {

  const label = displayName ? displayName : Text.en.anonymous

  return (
    <button type="button"
            className="btn--unstyled user-dropdown__header"
            onClick={onClick}>
      <div className="user-dropdown__wrapper">
        <div className="user-dropdown__label">{label}</div>
        <Avatar photoURL={photoURL} size={'small'}/>
      </div>
    </button>
  )

}

export default UserButton

UserButton.propTypes = {
  displayName: React.PropTypes.string,
  photoURL: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired
}
