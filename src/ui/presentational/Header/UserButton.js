import React from 'react'
import Avatar from '../Avatar'
import Text from './translations'

const UserButton = ({ onClick }, context) => {
  const {firebaseUser} = context
  const {displayName, photoURL} = firebaseUser
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

UserButton.contextTypes = {
  firebaseUser: React.PropTypes.object
}

UserButton.propTypes = {
  onClick: React.PropTypes.func.isRequired
}
