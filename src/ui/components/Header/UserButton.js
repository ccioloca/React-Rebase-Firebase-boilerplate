import React from 'react'
import Avatar from '../Avatar'

const UserButton = ({ onClick, displayName, photoURL, Text, language}) => {

  const label = displayName ? displayName : Text[language].anonymous

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
  onClick: React.PropTypes.func,
  displayName: React.PropTypes.string,
  photoURL: React.PropTypes.string
}
