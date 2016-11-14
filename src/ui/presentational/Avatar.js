import React from 'react'
import Center from './Center'
import { Block } from 'jsxstyle'

const Avatar = (props) => {
    return (

            <Block borderRadius='50%'
                    height={props.size}
                    width={props.size}
                    overflow='hidden'>
                <img src={props.photoURL} className='img-responsive'/>
            </Block>

    )
}

export default Avatar
