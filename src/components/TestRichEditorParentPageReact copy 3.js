import React, { useEffect, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const useHasChanged = (val: any) => {
  const prevVal = usePrevious(val);
  return prevVal !== val;
};

const TestRichEditorParentPageReact = () => {
  const contentEditable = useRef();

  const [currentTag, setCurrentTag] = useState("b");
  const [currentVal, setCurrentVal] = useState("justomegh");
  const [html, setHtml] = useState(
    `<${currentTag}>${currentVal}</${currentTag}>`
  );

  const hasVal1Changed = useHasChanged(currentTag);

  useEffect(() => {
    if (hasVal1Changed) {
      console.log("currentTag is updated.", currentTag);
      setCurrentVal("");//reseting t heh value
    }
  }, [currentTag]);

  // useEffect(() => {
  //   console.log("html value change", html);

  //   setCurrentVal(html);
  // }, [html]);

  const insertBreakAtPoint = (e) => {
    console.log("halfmile");
  };

  const handleChange = (evt) => {
    console.log("wdsfds", evt);
    setHtml(evt.target.value+`<h1>some</h1>`);
    // setCurrentVal()

  };
  return (
    <>
      <div>
        <button onClick={() => setCurrentTag("h1")}>h1</button>
        <button onClick={() => setCurrentTag("h6")}>h6</button>
        <ContentEditable
          innerRef={contentEditable}
          html={html}
          disabled={false}
          onChange={handleChange}
          tagName="article"
          onClick={(e) => insertBreakAtPoint(e)}
        />
      </div>
    </>
  );
};

export default TestRichEditorParentPageReact;
