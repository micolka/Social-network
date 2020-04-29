import React from "react";
import './MainPreloader.scss';

const MainPreloader = () => {
    return <div className='cssload-loader'>
        <div className='cssload-inner cssload-one'></div>
        <div className='cssload-inner cssload-two'></div>
        <div className='cssload-inner cssload-three'></div>
    </div>
};

export default MainPreloader;