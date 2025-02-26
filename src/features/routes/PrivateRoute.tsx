import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children } : any ) {
    const accessToken = false;
    const loading = false;
    const location = useLocation();
    const fromLocation = (location.state as any)?.from;
    const previousLocation = location.state ? fromLocation : '/login';
    

    if (accessToken) {
        return children
    } else if (loading) {
        return <div>Loading....</div>
    } else if (!accessToken && !loading) {
        return <Navigate to={previousLocation} state={{from: location}} replace/>;
    } else {
        return <div>Something went wrong</div>
    }   
}

export default PrivateRoute