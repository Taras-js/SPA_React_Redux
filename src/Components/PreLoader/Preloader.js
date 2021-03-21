import React from "react";
import   './Preloader.css'
const PreLoader = () => {

    return (
    <div className='preload'>
        {/*<img alt='disabled' src={preloader}/>*/}
        <div className="container">
            <div className="item item-1"></div>
            <div className="item item-2"></div>
            <div className="item item-3"></div>
            <div className="item item-4"></div>
        </div>
    </div>
    )
}
export default PreLoader;