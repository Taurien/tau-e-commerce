import React from 'react'

import '../Loader/Loader.style.scss'

const Loader = () => {
    return (
        <div className="loader flex flex-col items-center">
            <div className="circle"></div>
            <span><i><b>Loading magic...</b></i></span>
        </div>
    )
}

export default Loader
