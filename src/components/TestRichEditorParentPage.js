import React, { useState } from 'react'
import TestRichEditor from './TestRichEditor'
import TestRichEditorDetail from './TestRichEditorDetail'

function TestRichEditorParentPage() {
    const [previewData, setpreviewData] = useState(null)
    const runMyFuncOnSave=(data)=>{
        console.log('here i can run and do anything and here is your html data',data)
        if(data){
            setpreviewData(data)
        }
    }

  if(previewData){
        return <TestRichEditorDetail data={previewData} />;
  }
  else{

    return (
        <TestRichEditor runMyFuncOnSave={runMyFuncOnSave}/>
    
      )
  }

}

export default TestRichEditorParentPage