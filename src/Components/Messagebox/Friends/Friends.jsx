import React, {} from 'react';
import {Redirect} from "react-router";


const Friends = (props) => {
    if (!!props.isAuth) return <Redirect to='/login' />;
    return (
        <div className='friends'>
            <div>friends</div>
        </div>
    );
}
export default Friends;