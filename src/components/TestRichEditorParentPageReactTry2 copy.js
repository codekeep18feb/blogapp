import React, { useState } from "react";

export default function TestRichEditorParentPageReactTry2() {
  const [currentTab, setcurrentTab] = useState("i");
  const [currentContent, setcurrentContent] = useState("make it work!");
  const [savedHtmlString, setsavedHtmlString] = useState(
    "<h1>her is first</h1><h6>her is second</h6>"
  );


  const currentHtmlLine = `<${currentTab}>${currentContent}</${currentTab}>` 

  function createMarkup() {
    return { __html: savedHtmlString };
  }


  // console.log('window.getSelection()',window.getSelection()) 
    // we can get the selection any time we want -
    //  onclick, onselect within the text area
    function moveTheCursor(e) {
      let range;
      let textNode;
      let offset;
      const selected = document.getSelection()
      if (document.caretPositionFromPoint) {
        range = document.caretPositionFromPoint(e.clientX, e.clientY);
        textNode = range.offsetNode;
        offset = range.offset;
      } else if (document.caretRangeFromPoint) {
        // Use WebKit-proprietary fallback method

        range = document.caretRangeFromPoint(e.clientX, e.clientY);
        textNode = range.startContainer;
        offset = range.startOffset;
        console.log('arewerewr',range)
      } else {
        // Neither method is supported, do nothing
        return;
      }
      console.log('here letstry to move the cursor',textNode.parent)
      // Only split TEXT_NODEs
      if (textNode?.nodeType === 3) {
        let replacement = textNode.splitText(offset);
        console.log('replacement',replacement)
        let h1 = document.createElement("h1");
        h1.textContent = 'movecursortextadded'
        textNode.parentNode.insertBefore(h1, replacement);
      }
    }

    
    const handleInsideClick = (e)=>{
        console.log('here is onClick',e)

        console.log('html  node',e.target)
        console.log('html  node',e.target)
        //here we get the html of the node.
        const parent= e.target.parentElement



        const newNode1 = document.createElement(currentTab);
        const textNode = document.createTextNode("move the cursor to my end");
        
        
        //BIG ONE - MOVE THE CURSOR TO IT'S VERY END
        // const selected = document.getSelection()
        // console.log('firstselected',selected)
        moveTheCursor(e)
        

        newNode1.appendChild(textNode);
        //let's try to insert a node here with some text value
        //that further can be edited.
        parent.insertBefore(newNode1, parent.children[1]);







        //   const newNode1 = document.createElement("h1");
        // // Create a text node:
        // const textNode = document.createTextNode("Water3");
        // // Append text node to "li" element:
        // newNode1.appendChild(textNode);

        // // Insert before existing child:
        // const list = document.getElementById("myList");
        // list.insertBefore(newNode1, list.children[1]);

    }



  const handleChange = (e) => {
    console.log("e.target.value",e);
    
    

    // get the inserted new text value
    // get the entire node where it's being typed
    // then there is a possbility we scan throgh all the nodes

    // and reset their html - but wont it be infinte loop situation

  };

  return (
    <div
      contentEditable={true}
      onClick={(e)=>{
        handleInsideClick(e)
      }}
      style={{ height: "500", width: "100%" }}
    //   onChange={(e) => handleChange(e)}
        onInput={e => 
            handleChange(e)   
            // console.log('Text inside div', e.currentTarget.textContent)}
        }
      suppressContentEditableWarning={true}
    >
      <div dangerouslySetInnerHTML={createMarkup()} />;
    </div>
  );
}
