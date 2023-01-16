import React from 'react'

function TestRichEditor() {

  const toggleRed = () => {
    const editable = document.getElementById('text')
    const text = editable.innerHTML;
    console.log('testall',text)
    const selected = window.getSelection()
    console.log('selected',selected)
    console.log('selected',selected.rangeCount)
    console.log('selected',selected.getRangeAt(0))
    const selectedText = selected.toString()
    console.log('multiline selection',selectedText)
    const a = text.slice(selected.anchorOffset,selected.focusOffset+selected.focusOffset)
    console.log('position of the text',selected.anchorOffset,selected.focusOffset,text,a)
    editable.innerHTML = `<p style="color:red">${selectedText}</p>`;
  }
  
  return (
    <div>
      <button onClick={()=>toggleRed()}>Toggle Red</button>

        <div id="text" contentEditable="true" style={{
    width: '500px',
    height: '100px',
    border: '2px solid'
}}></div>
    
    </div>
  )
}

export default TestRichEditor