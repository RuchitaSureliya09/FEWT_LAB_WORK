import React from 'react'

function A3() {
    const islogin = true;
  return (
    <>
      {islogin && <h1>Login Successful.</h1>}
      {!islogin && <h1>Login Not Successful.</h1>}
    </>
  )
}

export default A3;
