import React, { useState } from "react";

export default function TREWithControls() {
  const [currentTab, setcurrentTab] = useState("i");
  const [currentContent, setcurrentContent] = useState("make it work!");
  const [savedHtmlString, setsavedHtmlString] = useState(
    "<div>thirdone</div><div>here we</div><div> now here</div>"
  );

  const [settings, setsettings] = useState({
    new_line_setting:false
  })


  //write all controles - headings,paragraph,span, NewLine onClick(settings), 

  function createMarkup() {
    return { __html: savedHtmlString };
  }

 

 
  const handleChange = (e) => {
    //here right to any state container

  };

  return (
    <div>
      <button onClick={()=>
        setcurrentTab('h1'
        )}>H1</button>
      <button onClick={()=>setcurrentTab('h6')}>H6</button>
      <div
        contentEditable={true}
        style={{ height: "500", width: "100%" }}
        onInput={(e) => handleChange(e)}
        suppressContentEditableWarning={true}
      >
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
      
    </div>
  );
}
