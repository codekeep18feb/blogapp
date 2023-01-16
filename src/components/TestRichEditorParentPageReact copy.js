import React, { useState } from 'react'

export default function TestRichEditorParentPageReact() {

  //just one textarea
  const [currentTag, setCurrentTag] = useState('h6')


  const res = currentTag=='h6'?'<h6>this is h6</h6>':'<h1>this is h1</h1>'

  return (

   <>
    {/* <textarea name="postContent">here any</textarea> */}
    <textarea dangerouslySetInnerHTML={{__html: res}} />
    <button onClick={()=>setCurrentTag('h1')}>h1</button>
    <button onClick={()=>setCurrentTag('h6')}>h6</button>
   </>
  )
}
