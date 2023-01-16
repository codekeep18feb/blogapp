import React, { useState } from "react";

export default function TestRichEditorParentPageReactTry2() {
  const [currentTab, setcurrentTab] = useState("div");
  const [currentContent, setcurrentContent] = useState("make it work!");
  const [savedHtmlString, setsavedHtmlString] = useState(
    "<div>thirdone</div><div>here we</div><div> now here</div>"
  );

  const [settings, setsettings] = useState({
    new_line_setting: false,
  });

  function createMarkup() {
    return { __html: savedHtmlString };
  }

  function moveTheCursorAndUpdateNodes(e) {
    let range;
    let textNode;
    let offset;
    const selected = document.getSelection();
    if (document.caretPositionFromPoint) {
      range = document.caretPositionFromPoint(e.clientX, e.clientY);
      textNode = range.offsetNode;
      offset = range.offset;
    } else if (document.caretRangeFromPoint) {
      range = document.caretRangeFromPoint(e.clientX, e.clientY);
      textNode = range.startContainer;
      offset = range.startOffset;
    } else {
      return;
    }

    if (textNode?.nodeType === 3) {
      const selected1 = document.getSelection();
      let h1 = document.createElement(currentTab);
      h1.textContent = ".";

      let h2 = document.createElement(textNode.parentNode.tagName);
      h2.textContent = selected1.focusNode.textContent.slice(
        0,
        selected.anchorOffset
      );

      selected1.focusNode.textContent = selected1.focusNode.textContent.slice(
        selected.anchorOffset
      );

      textNode.parentNode.parentNode.insertBefore(h1, textNode.parentNode);
      textNode.parentNode.parentNode.insertBefore(h2, h1);

      selected1.setPosition(
        selected1.focusNode.parentNode.previousSibling.childNodes[0],
        0
      );
    }
  }

  const loadTheFile =(e)=>{
    const reader1 = new FileReader();
    console.log('loadthefile string somewhere in the MEMORY',e.target.files[0])
    reader1.readAsDataURL(e.target.files[0]);
    reader1.onload=function () {
      console.log('base64 of img',reader1.result)
      const highlisted_place = document.getSelection()
      console.log('highlisted_place',highlisted_place)
      // highlisted_place.focusNode.parentNode <- refrence node
      // const div = document.createElement('div')
      // div.textContent=reader1.result.slice(0,20)

      const img = document.createElement('img')
      // div.textContent=reader1.result.slice(0,20)
      img.src=reader1.result
      

      // // highlisted_place.focusNode.parentNode.parentNode.insertBefore(div,highlisted_place.focusNode.parentNode)

      //remove the image Uploa Node
      const conterDoc = document.getElementById('content-container')
      let image_node=null
      for (const node of conterDoc.childNodes) {
        if(node.tagName==='INPUT'){
          image_node=node
          break
        }
      }
      if(image_node){
        console.log('imgNodefdsaf',image_node)
        image_node.replaceWith(img);
      }
  
      

  }
    //CHANGE THE IMAGE CONTAINER :) EASY PEASY
  }


  const handleInsideClick = (e) => {
    const selected1 = document.getSelection();
    
    if(currentTab=='image'){
      //do something special for them
      // console.log('cursor loc',selected1.focusNode.parentNode.parentNode)
      //Place a div on this location


      //DON'T OPEN THE DIALOGE IF IT'S ALREADY OPENED...

      const divContainer = document.getElementById('content-container')
      console.log('divContainer',divContainer)

      let found=false
      let imgIndex = null
      for (let i = 0; i < divContainer.childNodes.length; i++) {
        console.log('aerw hereenven here')
        const elementTag = divContainer.childNodes[i].tagName
        console.log('elementTag',elementTag)
        if(elementTag==='INPUT'){
          found=true
          imgIndex=i
          break
        }
        
      }

      if(!found){
        var file_elm = document.createElement("INPUT");
        file_elm.setAttribute("type", "file");
        file_elm.onchange = loadTheFile
        console.log('LET SEE we can tag the image and then referece it..',selected1.focusNode)
        //FIND ANY IMAGE NODE


        //REPLACE THE NODE WITH THIS..

  
        
  
        //convert the loaded image instring...
        //render that as a sting on the same location
  
        // const file_elm = document.createElement("input",{})
        // file_elm.textContent = 'fileupload_location'
        selected1.focusNode.parentNode.parentNode.insertBefore(file_elm,selected1.focusNode.parentNode)
  
      }




          //insert before the last one.


      
      //adding this div here on this location
      // const cursor = selected1.
      //get the cursor location
      //on the cursor location add an image opner
      //allow them to load the image
      //and show it into the same container

      //let them resize it freely


    }
    else if (selected1.focusNode.parentNode.tagName.toLowerCase() != currentTab) {
      moveTheCursorAndUpdateNodes(e);
    }
    
  };

  const handleChange = (e) => {
    const selected = document.getSelection();
  };

  return (
    <div >
      <button onClick={() => setcurrentTab("h1")}>H1</button>
      <button onClick={() => setcurrentTab("h6")}>H6</button>

      <button onClick={() => setcurrentTab("span")}>Span</button>
      <button onClick={() => setcurrentTab("p")}>Paragraph</button>
      <button onClick={() => setcurrentTab("image")}>Image</button>

      <div
        contentEditable={true}
        onClick={(e) => {
          handleInsideClick(e);
        }}
        style={{ minHeight: "500px", width: "100%" }}
        onInput={(e) => handleChange(e)}
        suppressContentEditableWarning={true}
      >
        <div dangerouslySetInnerHTML={createMarkup()} id="content-container"/>
      </div>
    </div>
  );
}
