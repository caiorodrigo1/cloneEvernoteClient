// import React from 'react';
// import { Route, Navigate } from 'react-router-dom'

// const privateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         localStorage.getItem('user')
//             ? <Component {...props} />
//             : <Navigate to={{ pathname: '/login' }} />
//     )} />
// )

// export default privateRoute;


import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'



function privateRoute() {
    let userid = localStorage.getItem("user") == null ? false : true;
    return (
        <>
            {userid ? <Outlet /> : <Navigate to="/login" />};
        </>

    )

}

export default privateRoute;