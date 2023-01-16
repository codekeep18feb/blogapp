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

  function moveTheCursor(node, end = true, offset = 0) {
    const selected = document.getSelection();

    if (node.nodeType === 1 && end) {
      selected.setPosition(node, 1);
    } else if (node.nodeType === 1 && !end) {
      selected.setPosition(node, 0);
    } else if (node.nodeType === 3 && offset)
      selected.setPosition(node, offset);
  }

  function nodesBetweenSelection() {
    const selected = document.getSelection()
    if(selected && selected.anchorNode){
        const docs= document.getElementById('content-container')
        const r = selected.getRangeAt(0)
    let nodes_list=[]
    let start=false
    let end=false  
    for (const child of r.commonAncestorContainer.childNodes) {
            // console.log(child,selected.anchorNode.parentNode)
            // console.log('child',child==selected.anchorNode.parentNode)
            
            if(child==selected.anchorNode.parentNode){
                start=true
                continue
            }
            else if(child==selected.focusNode.parentNode){
                end=true
            }
            if(start && !end){
                nodes_list.push(child)
            }
            
    }
    console.log(nodes_list)

    for (let i = 0; i < nodes_list.length; i++) {
        const element = nodes_list[i];
        element.remove()
        
    }

    }

   }

   function breakAllSelectedNodesCorrectly(e) {
    const selected = document.getSelection();
    const s_str = selected.toString();

    if (selected && selected.anchorNode) {
      // const docs = document.getElementById("content-container");
      const r = selected.getRangeAt(0);
      const first_s = selected.anchorNode.textContent.slice(
        0,
        selected.anchorOffset
      );
      const last_s = selected.focusNode.textContent.slice(
        selected.focusOffset
      );

      const first_elm = document.createElement(selected.anchorNode.parentNode.tagName);
      first_elm.textContent = first_s;

      const middle_elm = document.createElement(currentTab);
      middle_elm.textContent = s_str ? s_str : ".";

      const last_elm = document.createElement(selected.focusNode.parentNode.tagName);
      last_elm.textContent = last_s;

      let nodes_list = [];

      if (selected.isCollapsed) {
        const rangedChilds = document.getElementById("content-container");
        if (selected.anchorNode.parentNode.nextElementSibling) {
          const childAtEnd =selected.anchorNode.parentNode.nextElementSibling;
          rangedChilds.insertBefore(first_elm, childAtEnd);
          rangedChilds.insertBefore(middle_elm, childAtEnd);
          rangedChilds.insertBefore(last_elm, childAtEnd);
        } else {
          rangedChilds.appendChild(first_elm);
          rangedChilds.appendChild(middle_elm);
          rangedChilds.appendChild(last_elm);
        }

        first_elm.previousElementSibling.remove();
      } else {
        let start = false;
        let end = false;
        const rangedChilds = r.commonAncestorContainer;
        const all_childs = r.commonAncestorContainer.children;
        let start_ind = null;
        let end_ind = null;
        debugger;
        for (let j = 0; j < all_childs.length; j++) {
          const child = all_childs[j];
          if (child == selected.anchorNode.parentNode) {
            start_ind = j;

            continue;
          } else if (child == selected.focusNode.parentNode) {
            end_ind = j;
            break;
          }
        }

        let remove_childs = [];
        let childAtEnd = false;
        for (let i = start_ind; i <= end_ind; i++) {
          let child = all_childs[i];

          remove_childs.push(child);
          if (i == end_ind && end_ind + 1 < all_childs.length) {
            childAtEnd = all_childs[end_ind + 1];
          }
        }

        for (const c of remove_childs) {
          c.remove();
        }
        if (childAtEnd) {
          rangedChilds.insertBefore(first_elm, childAtEnd);
          rangedChilds.insertBefore(middle_elm, childAtEnd);
          rangedChilds.insertBefore(last_elm, childAtEnd);
        } else {
          rangedChilds.appendChild(first_elm, childAtEnd);
          rangedChilds.appendChild(middle_elm, childAtEnd);
          rangedChilds.appendChild(last_elm, childAtEnd);
        }
      }
      selected.setPosition(middle_elm, 1);

      let n = 0;
    }
  }

  const loadTheFile = (e) => {
    const reader1 = new FileReader();

    reader1.readAsDataURL(e.target.files[0]);
    reader1.onload = function () {
      const highlisted_place = document.getSelection();

      const img = document.createElement("img");

      img.src = reader1.result;

      const conterDoc = document.getElementById("content-container");
      let image_node = null;
      for (const node of conterDoc.childNodes) {
        if (node.tagName === "INPUT") {
          image_node = node;
          break;
        }
      }
      if (image_node) {
        image_node.replaceWith(img);
      }
    };
  };

  const handleInsideClick = (e) => {
    const selected1 = document.getSelection();

    if (currentTab == "image") {
      const divContainer = document.getElementById("content-container");

      let found = false;
      let imgIndex = null;
      for (let i = 0; i < divContainer.childNodes.length; i++) {
        const elementTag = divContainer.childNodes[i].tagName;

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

        selected1.focusNode.parentNode.parentNode.insertBefore(
          file_elm,
          selected1.focusNode.parentNode
        );
      }
    } else if (
      selected1.focusNode.parentNode.tagName.toLowerCase() != currentTab
    ) {
      breakAllSelectedNodesCorrectly(e);
    }
  };

  const handleChange = (e) => {
    const selected = document.getSelection();
  };

  const onSave1 = (e) => {
    e.preventDefault();
    const editable = document.getElementById("content-container");

    const a = editable.innerHTML;
    onSave(a);
  };
  return (
    <div>
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
      </div>
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
