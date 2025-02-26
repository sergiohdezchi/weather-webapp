import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';

function PersistLogin() {
  const accessToken = false;
  const loading = false;
  const refreshToken = false;

  useEffect(() => {
    function verifyRefreshToken() {
      try {
        //dispatch(refreshAccessToken(refreshToken));
        console.log('refreshing access token')
      } catch (error) {
        console.log('error refreshing acess token')
      }
    }
    if (!accessToken) {
      verifyRefreshToken()
    }
  } , [accessToken, refreshToken])

  return (
    <>
        {loading ? <div>Loading...</div> : <Outlet />}
    </>
  )
}

export default PersistLogin