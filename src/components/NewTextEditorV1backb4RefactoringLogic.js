import React, { useState } from "react";

export default function NewTextEditorV1({
  startHtmlString = "<div>..</div>",
  onSave,
}) {
  const [currentTab, setcurrentTab] = useState("div");
  const [currentContent, setcurrentContent] = useState("make it work!");
  const [savedHtmlString, setsavedHtmlString] = useState(startHtmlString);

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
      console.log(
        "let see if it runs everytime we type... and what does the selections say",
        selected1.focusNode.textContent,
        selected1.focusNode.textContent.slice(selected1.anchorOffset,selected1.focusOffset),
        selected1.anchorOffset,
        selected1.focusOffset,
        selected1.focusOffset,
        selected1.isCollapsed
      );
      let middle = document.createElement(currentTab);
      // let top = document.createElement(textNode.parentNode.tagName);
      let top = document.createElement(selected1.anchorNode.parentNode.tagName);
      

      
      
      if(!selected1.isCollapsed){
        middle.textContent = selected1.focusNode.textContent.slice(selected1.anchorOffset,selected1.focusOffset)

      }
      else if(selected1.isCollapsed){
        middle.textContent = "."
      }

      
      top.textContent = selected1.focusNode.textContent.slice(0,selected1.anchorOffset)
      selected1.focusNode.textContent = selected1.focusNode.textContent.slice(selected1.focusOffset)

      textNode.parentNode.parentNode.insertBefore(middle, textNode.parentNode);
      textNode.parentNode.parentNode.insertBefore(top, middle);

      selected1.setPosition(
        selected1.focusNode.parentNode.previousSibling.childNodes[0],
        0
      );
    }
  }

  const loadTheFile = (e) => {
    const reader1 = new FileReader();
    console.log(
      "loadthefile string somewhere in the MEMORY",
      e.target.files[0]
    );
    reader1.readAsDataURL(e.target.files[0]);
    reader1.onload = function () {
      console.log("base64 of img", reader1.result);
      const highlisted_place = document.getSelection();
      console.log("highlisted_place", highlisted_place);
      // highlisted_place.focusNode.parentNode <- refrence node
      // const div = document.createElement('div')
      // div.textContent=reader1.result.slice(0,20)

      const img = document.createElement("img");
      // div.textContent=reader1.result.slice(0,20)
      img.src = reader1.result;

      // // highlisted_place.focusNode.parentNode.parentNode.insertBefore(div,highlisted_place.focusNode.parentNode)

      //remove the image Uploa Node
      const conterDoc = document.getElementById("content-container");
      let image_node = null;
      for (const node of conterDoc.childNodes) {
        if (node.tagName === "INPUT") {
          image_node = node;
          break;
        }
      }
      if (image_node) {
        console.log("imgNodefdsaf", image_node);
        image_node.replaceWith(img);
      }
    };
    //CHANGE THE IMAGE CONTAINER :) EASY PEASY
  };

  const handleInsideClick = (e) => {
    const selected1 = document.getSelection();

    if (currentTab == "image") {
      //do something special for them
      // console.log('cursor loc',selected1.focusNode.parentNode.parentNode)
      //Place a div on this location

      //DON'T OPEN THE DIALOGE IF IT'S ALREADY OPENED...

      const divContainer = document.getElementById("content-container");
      console.log("divContainer", divContainer);

      let found = false;
      let imgIndex = null;
      for (let i = 0; i < divContainer.childNodes.length; i++) {
        console.log("aerw hereenven here");
        const elementTag = divContainer.childNodes[i].tagName;
        console.log("elementTag", elementTag);
        if (elementTag === "INPUT") {
          found = true;
          imgIndex = i;
          break;
        }
      }

      if (!found) {
        var file_elm = document.createElement("INPUT");
        file_elm.setAttribute("type", "file");
        file_elm.onchange = loadTheFile;
        console.log(
          "LET SEE we can tag the image and then referece it..",
          selected1.focusNode
        );
        //FIND ANY IMAGE NODE

        //REPLACE THE NODE WITH THIS..

        //convert the loaded image instring...
        //render that as a sting on the same location

        // const file_elm = document.createElement("input",{})
        // file_elm.textContent = 'fileupload_location'
        selected1.focusNode.parentNode.parentNode.insertBefore(
          file_elm,
          selected1.focusNode.parentNode
        );
      }

      //insert before the last one.

      //adding this div here on this location
      // const cursor = selected1.
      //get the cursor location
      //on the cursor location add an image opner
      //allow them to load the image
      //and show it into the same container

      //let them resize it freely
    } else if (
      selected1.focusNode.parentNode.tagName.toLowerCase() != currentTab
    ) {
      moveTheCursorAndUpdateNodes(e);
    }
  };

  const handleChange = (e) => {
    const selected = document.getSelection();
    console.log("selecteddoes  it triger everytime we  type...", selected);
    //Yes and that means we should  have handled updation every time user writes within this.  and not inside moveCursor i wonder how it's working... prbably because of selections...
    // if(selected)
    //here will make the selection working
  };

  const onSave1 = (e) => {
    e.preventDefault();
    const editable = document.getElementById("content-container");
    console.log("editable.innerHtml", editable.innerHTML);
    const a = editable.innerHTML;
    onSave(a);
    // setPreviewData(editable.innerHTML);
    // setsubmitted(true);
    // //1 . let's save it in localstorage
    // //2. onSave
    // onSave(editable.innerHTML)
  };
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setcurrentTab("h1");
        }}
      >
        H1
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setcurrentTab("h6");
        }}
      >
        H6
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          setcurrentTab("span");
        }}
      >
        Span
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setcurrentTab("p");
        }}
      >
        Paragraph
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setcurrentTab("image");
        }}
      >
        Image
      </button>

      <div
        contentEditable={true}
        onClick={(e) => {
          handleInsideClick(e);
        }}
        style={{ minHeight: "500px", width: "100%" }}
        onInput={(e) => handleChange(e)}
        suppressContentEditableWarning={true}
      >
        <div dangerouslySetInnerHTML={createMarkup()} id="content-container" />
      </div>
      <div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              onSave1(e);
            }}
          >
            onSave
          </button>
        </div>
      </div>
    </div>
  );
}
