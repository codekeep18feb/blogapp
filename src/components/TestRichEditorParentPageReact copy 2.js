import React, { useEffect, useRef, useState } from 'react'
import ContentEditable from 'react-contenteditable'



function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const useHasChanged= (val: any) => {
  const prevVal = usePrevious(val)
  return prevVal !== val
}

// const usePrevious = (value) => {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }


const TestRichEditorParentPageReact =()=>{
  const contentEditable = useRef()
  // const currentTag = 
  const [currentTag, setCurrentTag] = useState("b")
  const [currentVal, setCurrentVal] = useState("justomegh")
  const [html, setHtml] = useState(`<${currentTag}>${currentVal}</${currentTag}>`)

  const hasVal1Changed = useHasChanged(currentTag)


  useEffect(() => {
    if(hasVal1Changed){
      console.log('currentTag is updated.',currentTag)
      setCurrentVal('somehing more')
    }
    // console.log('hasVal1Changed',hasVal1Changed,currentTag)
    //whenever only currentTab changes..
    // reset setCurrentVal
    // find some smart way to update the html whenever required.




    // setHtml
    // if(html){
    //   console.log('here is  html..',html)
    //   setHtml(html)
    // }
  }, [currentTag])



  useEffect(() => {
    console.log('html value change',html)
    // setHtml(html)
    //ifrst we need to parse it correct 
    //and then reset whenever needed.
    setCurrentVal(html)

  }, [html])
  

  const insertBreakAtPoint=(e)=>{
    console.log('halfmile')
  }



  // function insertBreakAtPoint(e) {
  //   console.log("arewrer");
  //   let range;
  //   let textNode;
  //   let offset;
  //   const selected = document.getSelection();
  //   if (document.caretPositionFromPoint) {
  //     range = document.caretPositionFromPoint(e.clientX, e.clientY);
  //     textNode = range.offsetNode;
  //     offset = range.offset;
  //   } else if (document.caretRangeFromPoint) {
  //     console.log("atthispoint", e.clientX, e.clientY);
  //     console.log("arewe here in reactt :(");

  //     range = document.caretRangeFromPoint(e.clientX, e.clientY);
  //     textNode = range.startContainer;
  //     offset = range.startOffset;
  //   } else {
  //     return;
  //   }

  //   if (textNode?.nodeType === 3) {
  //     console.log("what is the  offset :)", offset, selected.toString().length);
  //     let replacement = textNode.splitText(offset);

  //     // let img1 = document.createElement('img')
  //     // img1.src = 'https://images.pexels.com/photos/14320926/pexels-photo-14320926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //     // img1.height='100'
  //     // img1.width='100'
  //     let insertingTag = document.createElement(insertiontag);
  //     insertingTag.style.margin = insertionCSS.margin||0;

  //     if (insertionCSS) {
  //       if(insertionCSS.color){
  //         insertingTag.style.color = insertionCSS.color;

  //       }
  //       if(insertionCSS.fontSize){
  //         insertingTag.style.fontSize = insertionCSS.fontSize;

  //       }
        
  //     }
  //     insertingTag.textContent = selected.toString();
  //     textNode.parentNode.insertBefore(insertingTag, replacement);
  //     // textNode.parentNode.insertBefore(img1, replacement);
  //     console.log(
  //       "textNode.textContent",
  //       textNode.textContent.length,
  //       typeof textNode.textContent,
  //       textNode.textContent.length - selected.toString().length
  //     );
  //     textNode.textContent = textNode.textContent.slice(
  //       0,
  //       textNode.textContent.length - selected.toString().length
  //     );
  //   }
  // }


  


    const handleChange = evt => {
    // this.setState({html: evt.target.value});
    console.log('wdsfds',evt.target.value)
    setHtml(evt.target.value)
    // setHtml(`${evt.target.value}`)
    


  };
  return (<>
  
  <div>
    <button onClick={()=>setCurrentTag('h1')}>h1</button>
    <button onClick={()=>setCurrentTag('h6')}>h6</button>
    <ContentEditable
              innerRef={contentEditable}
              html={html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
              onClick={(e)=>insertBreakAtPoint(e)}
            />
  </div>
  </>)

} 
// {
//   constructor() {
//     super()
//     this.contentEditable = React.createRef();
//     this.state = {html: "<b>Hello <i>World</i></b>"};
//   };

//   handleChange = evt => {
//     this.setState({html: evt.target.value});
//   };

//   render = () => {
    // return <ContentEditable
    //           innerRef={this.contentEditable}
    //           html={this.state.html} // innerHTML of the editable div
    //           disabled={false}       // use true to disable editing
    //           onChange={this.handleChange} // handle innerHTML change
    //           tagName='article' // Use a custom HTML tag (uses a div by default)
    //         />
//   };
// };

export default TestRichEditorParentPageReact;