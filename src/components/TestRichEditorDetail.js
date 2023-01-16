import React from 'react'

function TestRichEditorDetail({data}) {
  return (
    <div dangerouslySetInnerHTML={{__html: data}} />
  )
}

export default TestRichEditorDetail