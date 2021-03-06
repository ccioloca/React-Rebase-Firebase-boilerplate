import React from 'react'

const Avatar = ({size, photoURL}) => {

    return (
            <div className={`avatar`}>
                <img  src={photoURL}
                      role="presentation"
                      className='o-img-responsive avatar__image'/>
            </div>
    )
}

export default Avatar

Avatar.propTypes = {
  size: React.PropTypes.string.isRequired,
  photoURL: React.PropTypes.string
}
