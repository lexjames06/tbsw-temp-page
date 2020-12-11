import React, { useState, useEffect } from 'react'
import ConfettiComp from 'react-confetti'
import useWindowSize from '../functions/useWindowSize'

const Confetti = () => {

    const windowSize = useWindowSize();
    
    return (
        <ConfettiComp
            width={windowSize.width}
            height={windowSize.height}
        />
    )
}

export default Confetti;