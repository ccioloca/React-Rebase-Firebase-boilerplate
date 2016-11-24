import React from 'react'

const Avatar = ({size, photoURL}) => {

    return (
            <div className={`avatar avatar--${size}`}>
                <img  src={photoURL}
                      role="presentation"
                      className='o-img-responsive avatar__image'/>
            </div>
    )
}

export default Avatar

Avatar.propTypes = {
  size: React.PropTypes.string,
  photoURL: React.PropTypes.string
}
