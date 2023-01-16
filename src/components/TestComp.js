import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";

export default () => {
  const editableRef = useRef();
  const [editableText, setEditableText] = useState("Edit me.");
  return (
    <ContentEditable
      innerRef={editableRef}
      tagName="p"
      html={editableText}
      onPaste={(e) => {
        e.preventDefault();
        console.log('dowehaveslectiostart',e)
        const text = e.clipboardData.getData("text");
        document.execCommand("insertText", false, text);
      }}
      onChange={(e) => {
        const html = e.target.value;
        setEditableText(html);
      }}
    />
  );
};