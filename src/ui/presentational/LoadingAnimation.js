import React from 'react'
import Loading from 'react-loading'
import Center from '../layout/Center'

const LoadingAnimation = (props) => {

    return (
        <Center height={props.height}
                width='100%'>
            <Loading type='spinningBubbles'
                     color='#6CA6CD' />
        </Center>
    )
}

export default LoadingAnimation
