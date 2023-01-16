import React, { useEffect, useState } from "react";
import TestRichEditorDetail from "./TestRichEditorDetail";

function TestRichEditor({onSave,savedData=null}) {
  const [insertiontag, setInsertiontag] = useState("h1");
  const [submitted, setsubmitted] = useState(false);
  // const [previewData, setPreviewData] = useState(null);
  const [insertionCSS, SetinsertionCSS] = useState({});

  // useEffect(() => {
  //   console.log('isavedda',savedData)
  //   if(savedData){
  //     const editable = document.getElementById("wholeText");
  //     console.log('eidta',editable)
  //     // console.log("editable.innerHtml", editable.innerHTML);
  //     editable.innerHTML=savedData
  //   }
  // }, [savedData])

  useEffect(() => {
      const editable = document.getElementById("wholeText");

      editable.innerHTML=savedData
    
  }, [])
  
  
  const onSave1 = (e) => {
    e.preventDefault()
    const editable = document.getElementById("wholeText");
    console.log("editable.innerHtml", editable.innerHTML);
    const a = editable.innerHTML
    onSave(a)
    // setPreviewData(editable.innerHTML);
    // setsubmitted(true);
    // //1 . let's save it in localstorage
    // //2. onSave
    // onSave(editable.innerHTML)
  };

  const toggleRed = () => {
    const editable = document.getElementById("wholeText");
    const text = editable.innerHTML;
    console.log("testall", text);
    const selected = window.getSelection();

    console.log("is it a range object", selected.getRangeAt(0));
  };

  function insertBreakAtPoint(e) {
    console.log("arewrer");
    let range;
    let textNode;
    let offset;
    const selected = document.getSelection();
    if (document.caretPositionFromPoint) {
      range = document.caretPositionFromPoint(e.clientX, e.clientY);
      textNode = range.offsetNode;
      offset = range.offset;
    } else if (document.caretRangeFromPoint) {
      console.log("atthispoint", e.clientX, e.clientY);
      console.log("arewe here in reactt :(");

      range = document.caretRangeFromPoint(e.clientX, e.clientY);
    
      textNode = range.startContainer;
      offset = range.startOffset;
      console.log('dsfsadsrange',range)
      // range.selectionStart = range.selectionEnd= 0
    } else {
      return;
    }

    if (textNode?.nodeType === 3) {
      console.log("what is the  offset :)", offset, selected.toString().length);
      let replacement = textNode.splitText(offset);

      // let img1 = document.createElement('img')
      // img1.src = 'https://images.pexels.com/photos/14320926/pexels-photo-14320926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      // img1.height='100'
      // img1.width='100'
      let insertingTag = document.createElement(insertiontag);
      insertingTag.style.margin = insertionCSS.margin||0;

      if (insertionCSS) {
        if(insertionCSS.color){
          insertingTag.style.color = insertionCSS.color;

        }
        if(insertionCSS.fontSize){
          insertingTag.style.fontSize = insertionCSS.fontSize;

        }
        
      }
      insertingTag.textContent = selected.toString();
      textNode.parentNode.insertBefore(insertingTag, replacement);
      // textNode.parentNode.insertBefore(img1, replacement);
      console.log(
        "textNode.textContent",
        textNode.textContent.length,
        typeof textNode.textContent,
        textNode.textContent.length - selected.toString().length
      );
      textNode.textContent = textNode.textContent.slice(
        0,
        textNode.textContent.length - selected.toString().length
      );
      //MAGICAL  LINE
      const selected1 =document.getSelection()

      // console.log('selected1',selected1)
      // selected1.setPosition(selected1.focusNode.nextSibling,1)
    }
  }

  const handleSelect = (e) => {
    e.preventDefault();
    console.log("e here", e.target.value);
    setInsertiontag(e.target.value);
  };

  if (!submitted) {
    return (
      <div>
        {/* <label htmlFor="headers">Headers:</label> */}
        <select name="headers" id="headers" onChange={(e) => handleSelect(e)}>
          <option value="h1">h1</option>
          <option value="h2">h2</option>
          <option value="h3">h3</option>
          <option value="h3">h4</option>
          <option value="h3">h5</option>
          <option value="h3">h6</option>
        </select>

        {/* <label htmlFor="paraspans">para|span</label> */}
        <select
          name="paraspans"
          id="paraspans"
          onChange={(e) => handleSelect(e)}
        >
          <option value="p">Paragraph</option>
          <option value="span">Span</option>
        </select>

        <select name="biu" id="biu" onChange={(e) => handleSelect(e)}>
          <option value="strong">Bold</option>
          <option value="i">Italic</option>
          <option value="u">Underline</option>
        </select>

        <select
          name="colors"
          id="colors"
          onChange={(e) => SetinsertionCSS({...insertionCSS,color:e.target.value})}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
        </select>


        <select
          name="fontSize"
          id="fontSize"
          onChange={(e) => SetinsertionCSS({...insertionCSS,fontSize:e.target.value})}
        >
          <option value="14px">14px</option>
          <option value="16px">16px</option>
        </select>

        <select
          name="margin"
          id="margin"
          onChange={(e) => SetinsertionCSS({...insertionCSS,margin:e.target.value})}
        >
          <option value="10px">10px</option>
          <option value="15px">15px</option>
        </select>
        {/* <button onClick={() => setInsertiontag("h1")}>H1</button>
        <button onClick={() => setInsertiontag("h6")}>H6</button>
        <button onClick={() => setInsertiontag("span")}>Span</button> */}
        {/* <p id="para">Hello</p> */}
        {/* <button onClick={() => toggleRed()}>Toggle Red</button> */}

        <div id="wholeText" contentEditable="true" style={{ height: "300px" }} onClick={(e) => {
            insertBreakAtPoint(e)
            console.log('arewe ewre')
          }}>
          <p className="para" >
            :AFixedEnd
          </p>
          
        </div>

        <button onClick={(e)=>{
          e.preventDefault()
          onSave1(e)
        }}>onSave</button>
      </div>
    );
  } 
}

export default TestRichEditor;
