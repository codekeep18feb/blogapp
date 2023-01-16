import React from 'react'

function TestRichEditor() {

  const switchTagTo = (tag='p') => {
    const defaultag = tag
    const editable = document.getElementById('wholeText')
    const wholeText = editable.innerHTML;
    console.log('testall',wholeText)
    const selected = window.getSelection()
    console.log('selected',selected)
    console.log('selected',selected.rangeCount)
    console.log('selected',selected.getRangeAt(0))
    const selectedwholeText = selected.toString()
    console.log('multiline selection',selectedwholeText)
    const a = wholeText.slice(selected.anchorOffset,selected.focusOffset+selected.focusOffset)
    console.log('position of the wholeText',selected.anchorOffset,selected.focusOffset,wholeText,a)
    editable.innerHTML = `<${defaultag} style="color:red">${selectedwholeText}</${defaultag}>`;
  }
  
  return (
    <div>
      <button onClick={()=>switchTagTo('h1')}>H1</button>
      <button onClick={()=>switchTagTo('h6')}>H6</button>

        <div id="wholeText" contentEditable="true" style={{
    width: '500px',
    height: '100px',
    border: '2px solid'
}}></div>
    
    </div>
  )
}

export default TestRichEditor