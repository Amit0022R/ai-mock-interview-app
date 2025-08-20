// common layout for authentication pages

import React, { ReactNode } from 'react'
// update layout to destructure children from props
const Authlayout = ({children } : {children : ReactNode
  } ) => {
  return (
    <div>{children}</div>
  )
}

export default Authlayout