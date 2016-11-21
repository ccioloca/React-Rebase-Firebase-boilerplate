import React from 'react'

const Avatar = ({photoURL, size}) => {
    return (
            <div className={`avatar avatar--${size}`}>
                <img  src={photoURL} 
                      role="presentation"
                      className='o-img-responsive avatar__image'/>
            </div>
    )
}

export default Avatar