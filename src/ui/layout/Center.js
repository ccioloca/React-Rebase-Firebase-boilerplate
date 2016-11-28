import React from 'react'
import { Flex } from 'jsxstyle'

const Center = ({ children, ...rest }) => {
  return (
    <Flex alignItems='center'
          justifyContent='center'
          flexWrap='wrap'
          {...rest}>
          {children}
    </Flex>
  )
}

export default Center
