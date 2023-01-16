import React, { useState } from "react";

export default function TestRichEditorParentPageReactTry2() {
  const [currentTab, setcurrentTab] = useState("i");
  const [currentContent, setcurrentContent] = useState("make it work!");
  const [savedHtmlString, setsavedHtmlString] = useState("<div>thirdone</div><div>here we</div><div> now here</div>")


  const currentHtmlLine = `<${currentTab}>${currentContent}</${currentTab}>` 

  function createMarkup() {
    return { __html: savedHtmlString }
  }
  const splitNodes = (node) => {
    // let node = document.getElementById(a)
    let splitme = node
    console.log('nodetype',node.nodeType)
    if (splitme.childNodes.length === 1) {
      console.log("od is eem to be running..", node);
      let splitme = node;
      //if this does not have any further nodes
      console.log("splitme", splitme.childNodes.length);
      // const prev_content = splitme.textContent

      let cover_div = document.createElement("div");
      let prv_node = document.createElement("h1");

      const selected = document.getSelection()
      
      // console.log('selecteddfsafa',selected.anchorOffset)
      const b = splitme.textContent.slice(0,selected.anchorOffset)
      console.log('dsfdsfdsf',selected)
      prv_node.textContent = splitme.textContent.slice(0,selected.anchorOffset);

      // splitme.parentNode.insertBefore(prv_node,splitme);

      let middle_node = document.createElement(currentTab);
      middle_node.textContent = ".";

      let next_node = document.createElement("h1");
      next_node.textContent = splitme.textContent.slice(selected.anchorOffset)

      cover_div.appendChild(prv_node);
      cover_div.appendChild(middle_node);
      cover_div.appendChild(next_node);
      // splitme.parentNode.replaceChild(cover_div,splitme);
      // splitme.parentNode.replaceWith(cover_div);
      return cover_div
    } else {
      // throw new Error("Multiple child nodes found  in the  parent");
      return node
    
    }
  };
    



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
      console.log('here letstry to move the cursor',textNode)
      // Only split TEXT_NODEs
      if (textNode?.nodeType === 3) {
        const selected1 = document.getSelection()
        
        //WE  PROBABLY HAVE TO ADD THREE NODES...
        // let replacement = textNode.splitText(offset);
        // console.log('replacement',replacement)
        let h1 = document.createElement(currentTab);
        h1.textContent = '.'

        let h2 = document.createElement(textNode.parentNode.tagName);
        h2.textContent = selected1.focusNode.textContent.slice(0,selected.anchorOffset)



        console.log('endslice',selected1.focusNode.textContent.slice(selected.anchorOffset),selected.anchorOffset)
        selected1.focusNode.textContent=selected1.focusNode.textContent.slice(selected.anchorOffset)
        // next_node.textContent = splitme.textContent.slice(selected.anchorOffset)
        
        
        // console.log('textNodedsafdsf',textNode.parentNode.childNodes[0])
        // textNode.parentNode.childNodes.slice.call(textNode, 1); 
        // textNode.parentNode.appendChild(h1)
        // textNode.parentNode.removeChild(textNode.parentNode.childNodes[0]);

        // console.log(document.getSelection())
        // console.log('textNode.parentNode',textNode,replacement)
        // const a = document.createTextNode("Part 1 ")
        // textNode.parentNode.insertBefore(h1, replacement);

        //START measuring the selction


        // const insert_node = splitNodes(textNode.parentNode)
        // console.log('here is inserted_nodes',textNode.parentNode.nodeType,insert_node)
        // textNode.parentNode.replaceWith(insert_node);

        // textNode.parentNode.textContent = 'shortenedlast'
        console.log('here is text node',textNode.parentNode.tagName)
        
        textNode.parentNode.parentNode.insertBefore(h1, textNode.parentNode);
        textNode.parentNode.parentNode.insertBefore(h2, h1);


        //shorten the node content to last part
        //add two siblings - middle , last





        console.log('selected1',selected1,selected1.focusNode.parentNode.previousSibling.childNodes[0])
        // console.log(first)
        selected1.setPosition(selected1.focusNode.parentNode.previousSibling.childNodes[0],0)


      }
    }

    
    const handleInsideClick = (e)=>{
        console.log('here is onClick',e)

        console.log('html  node',e.target)
        console.log('html  node',e.target)
        //here we get the html of the node.
        // const parent= e.target.parentElement
        // const newNode1 = document.createElement(currentTab);
        // const textNode = document.createTextNode(".");
        
        
        //BIG ONE - MOVE THE CURSOR TO IT'S VERY END
        // const selected = document.getSelection()
        // console.log('firstselected',selected)
        moveTheCursor(e)
        

        // newNode1.appendChild(textNode);
        //let's try to insert a node here with some text value
        //that further can be edited.
        // console.log('newNode1, parent.children[1]',newNode1, parent.children[1])
        // parent.insertBefore(newNode1, parent.children[1]);

        console.log('arew ehere  here')
        const selected1 =document.getSelection()

        // console.log('selected1',selected1,selected1.focusNode.parentNode.childNodes[1].textContent)
        //Magic
        // selected1.setPosition(selected1.focusNode.parentNode.nextSibling,1)
        // selected1.setPosition(selected1.focusNode.parentNode.childNodes[1],0)
        
        // selected1.setPosition(selected1.focusNode.nextSibling,0)







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
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}
