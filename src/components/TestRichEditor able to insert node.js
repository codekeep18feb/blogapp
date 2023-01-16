import React, { useEffect } from "react";

function TestRichEditor() {
  //   function getSelectedNodes() {
  //     var selectedNodes = [];
  //     var sel = rangy.getSelection();
  //     for (var i = 0; i < sel.rangeCount; ++i) {
  //         selectedNodes = selectedNodes.concat( sel.getRangeAt(i).getNodes() );
  //     }
  //     return selectedNodes;
  // }

  // 1 possible way
  // need to get selected nodes
  // need to be able to insert a node between in the html collection - done

  useEffect(() => {
    //   const newNode1 = document.createElement("h1");
    // // Create a text node:
    // const textNode = document.createTextNode("Water3");
    // // Append text node to "li" element:
    // newNode1.appendChild(textNode);

    // // Insert before existing child:
    // const list = document.getElementById("myList");
    // list.insertBefore(newNode1, list.children[1]);

 

    const editable = document.getElementById("wholeText");
    editable.innerHTML = `<h1>something</h1><h6>andelse</h6>`;

    const newNode1 = document.createElement("p");
    // Create a text node:
    const textNode = document.createTextNode("Water3");
    // Append text node to "li" element:
    newNode1.appendChild(textNode);
    editable.insertBefore(newNode1, editable.children[1]);
  }, []);

  // useEffect(() => {
  //   const editable = document.getElementById('wholeText').parentNode
  //   const editableNode = document.getElementById('wholeText').parentNode
  //   editable.innerHTML = `<h1>something</h1><h6>andelse</h6>`

  //   // for (let i = 0; i < editable.childNodes.length; i++) {
  //   //   alert( editable.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
  //   // }
  //   // for (const node of editable.childNodes) {
  //   //   alert(node)
  //   // }
  //   let h1Elm = document.createElement('h1');
  //   h1Elm.textContent = 'Services';
  //   editableNode.insertAfter(h1Elm,  editable.lastElementChild);
  //   newNode.appendChild(textNode);

  // }, [])

  // const switchTagTo = (tag='p') => {
  //   const defaultag = tag
  //   const editable = document.getElementById('wholeText')
  //   const prevNode = null
  //   const nextNode = null
  //   // const wholeText = editable.innerHTML;
  //   // console.log('testall',wholeText)
  //   // const selected = document.getSelection()
  //   // console.log('selected',selected)
  //   // console.log('selectedNodes',selected)

  //   // editable.innerHTML = `<${defaultag} style="color:red">${editable.innerHTML}</${defaultag}>`;

  //   editable.innerHTML = `<h1>something</h1><h4>and else</h4>`
  // }

  return (
    // <ul id="myList">
    //   <li>Coffee</li>
    //   <li>Tea</li>
    // </ul>
    <div>
      {/* <button onClick={()=>switchTagTo('h1')}>H1</button>
      <button onClick={()=>switchTagTo('h6')}>H6</button> */}

      <div
        id="wholeText"
        contentEditable="true"
        style={{
          width: "500px",
          height: "100px",
          border: "2px solid",
        }}
      ></div>
    </div>
  );
}

export default TestRichEditor;
