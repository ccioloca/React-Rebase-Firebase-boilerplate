import React from 'react'
import Center from './Center'
import { Block } from 'jsxstyle'

const Avatar = (props) => {
    return (

      <svg height="24" width="24">
        <rect fill="#a0d36a" x="0" y="0" height={props.size} width={props.size}></rect>
        <text
        fill="#ffffff"
        font-size="12"
        text-anchor="middle"
        x="12"
        y="16">Anon</text>
      </svg>

    )
}

export default Avatar
