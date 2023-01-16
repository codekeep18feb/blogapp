import React from 'react'

export default function TagWrapper({children,tag}) {
  if (tag!='h1'){

    return (
      <p>{children}</p>
    )
  
  }
  return (
    <h1>{children}</h1>
  )

}
