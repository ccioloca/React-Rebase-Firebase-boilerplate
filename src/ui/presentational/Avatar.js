import React from 'react'
import { Block } from 'jsxstyle'

const Avatar = ({photoURL, size}) => {
    return (
            <Block borderRadius='50%'
                    height={size}
                    width={size}
                    overflow='hidden'>
                <img src={photoURL} className='img-responsive'/>
            </Block>
    )
}

export default Avatar
